import json

def normalize_edition(edition_data):
    cleaned = {
        "_id": edition_data["id"],
        "anoEdicao": edition_data["anoEdição"],
        "organizacao": edition_data.get("organizacao", ""),
        "musicas": []
    }

    for musica in edition_data.get("musicas", []):
        cleaned_musica = {
            "id": musica.get("id"),
            "titulo": musica.get("título"),
            "pais": musica.get("país"),
            "link": musica.get("link"),
            "compositor": musica.get("compositor"),
            "interprete": musica.get("intérprete"),
            "letra": musica.get("letra") if "letra" in musica else None
        }
        cleaned["musicas"].append(cleaned_musica)

    return cleaned

def main():
    with open("raw_dataset.json", "r", encoding="utf-8") as f:
        raw_data = json.load(f)

    cleaned_data = [normalize_edition(ed) for ed in raw_data.values()]

    with open("dataset.json", "w", encoding="utf-8") as f:
        json.dump(cleaned_data, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
