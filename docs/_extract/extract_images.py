from pypdf import PdfReader
from pypdf.generic import IndirectObject
from pathlib import Path

out = Path(__file__).parent
reader = PdfReader(
    Path(__file__).resolve().parents[1]
    / "Trabalho_02_Projeto_Interface_EmpresaPatins.pdf"
)


def walk(obj, seen, bucket):
    if isinstance(obj, IndirectObject):
        key = (obj.idnum, obj.generation)
        if key in seen:
            return
        seen.add(key)
        obj = obj.get_object()
    if isinstance(obj, dict):
        if obj.get("/Subtype") == "/Image" and obj.get("/Width"):
            bucket.append(obj)
        for value in obj.values():
            walk(value, seen, bucket)
    elif isinstance(obj, list):
        for item in obj:
            walk(item, seen, bucket)


images = []
seen = set()
for page in reader.pages:
    walk(page, seen, images)

print("found", len(images), "images")
for i, obj in enumerate(images):
    width = obj.get("/Width")
    height = obj.get("/Height")
    data = obj.get_data()
    filt = str(obj.get("/Filter"))
    print(f"{i} {width}x{height} filter={filt} bytes={len(data)}")
    if "DCTDecode" in filt:
        ext = "jpg"
        path = out / f"diagram_{i}_{width}x{height}.{ext}"
        path.write_bytes(data)
    else:
        # try to wrap raw RGB as PPM if possible
        path = out / f"diagram_{i}_{width}x{height}.bin"
        path.write_bytes(data)
        print("  wrote raw", path)
