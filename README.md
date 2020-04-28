# Pokédex
Helpful information about the pocket monsters from the Kanto region onwards

## Resources
[Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/get-started/web)
[Fiber - Go Web Framework](https://github.com/gofiber/fiber)
[Go Mongo Driver](https://pkg.go.dev/go.mongodb.org/mongo-driver)
[Pokémon Data](https://github.com/fanzeyi/pokemon.json)
[Node Fetch](https://github.com/node-fetch/node-fetch)

## Ingest Data to MongoDB
```
mongoimport -d pokemon -c types --jsonArray --file .\data\types.json
mongoimport -d pokemon -c moves --jsonArray --file .\data\moves.json
mongoimport -d pokemon -c items --jsonArray --file .\data\items.json
mongoimport -d pokemon -c pokedex --jsonArray --file .\data\pokedex.json
```

## Server Requests

`curl -s localhost:9001/pokedex/150 | python -m json.tool`

Response:
```
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
}
```
