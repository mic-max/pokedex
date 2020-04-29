# Pokédex
Helpful information about the pocket monsters from the Kanto region onwards

## Resources
[Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started/web)  
[Fiber - Go Web Framework](https://github.com/gofiber/fiber)  
[Go Mongo Driver](https://pkg.go.dev/go.mongodb.org/mongo-driver)  
[Pokémon Data](https://github.com/fanzeyi/pokemon.json)  

## Ingest Data to MongoDB
```
mongoimport -d pokemon -c types   --jsonArray --file .\data\types.json
mongoimport -d pokemon -c moves   --jsonArray --file .\data\moves.json
mongoimport -d pokemon -c items   --jsonArray --file .\data\items.json
mongoimport -d pokemon -c pokedex --jsonArray --file .\data\pokedex.json
```

## Server Requests

### Get a single Pokémon
`curl -s localhost:9001/pokedex/5 | python -m json.tool`

Response:
```
{
    "base": {
        "Attack": 64,
        "Defense": 58,
        "HP": 58,
        "Sp. Attack": 80,
        "Sp. Defense": 65,
        "Speed": 80
    },
    "id": 5,
    "name": {
        "chinese": "\u706b\u6050\u9f99",
        "english": "Charmeleon",
        "french": "Reptincel",
        "japanese": "\u30ea\u30b6\u30fc\u30c9"
    },
    "type": [
        "Fire"
    ]
}
```

### Get a range of Pokémon

`curl -s localhost:9001/pokedex/range/150/152 | python -m json.tool`

Response:
```
[
    {
        "base": {
            "Attack": 110,
            "Defense": 90,
            "HP": 106,
            "Sp. Attack": 154,
            "Sp. Defense": 90,
            "Speed": 130
        },
        "id": 150,
        "name": {
            "chinese": "\u8d85\u68a6",
            "english": "Mewtwo",
            "french": "Mewtwo",
            "japanese": "\u30df\u30e5\u30a6\u30c4\u30fc"
        },
        "type": [
            "Psychic"
        ]
    },
    {
        "base": {
            "Attack": 100,
            "Defense": 100,
            "HP": 100,
            "Sp. Attack": 100,
            "Sp. Defense": 100,
            "Speed": 100
        },
        "id": 151,
        "name": {
            "chinese": "\u68a6\u5e7b",
            "english": "Mew",
            "french": "Mew",
            "japanese": "\u30df\u30e5\u30a6"
        },
        "type": [
            "Psychic"
        ]
    }
]
