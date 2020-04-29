package main

import (
	"context"
	"encoding/json"
	"flag"
	"strconv"

	"github.com/gofiber/cors"
	"github.com/gofiber/fiber"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type pokemon struct {
	ID        int      `json:"id"`
	EName     string   `json:"ename"`
	FName     string   `json:"fname"`
	CName     string   `json:"cname"`
	JName     string   `json:"jname"`
	Types     []string `json:"types"`
	HP        int      `json:"hp"`
	Attack    int      `json:"attack"`
	Defense   int      `json:"defense"`
	SpAttack  int      `json:"spattack"`
	SpDefense int      `json:"spdefense"`
	Speed     int      `json:"speed"`
}

type item struct {
	ID    int    `json:"id"`
	EName string `json:"ename"`
	CName string `json:"cname"`
	JName string `json:"jname"`
}

type move struct {
	ID       int    `json:"id"`
	EName    string `json:"ename"`
	CName    string `json:"cname"`
	JName    string `json:"jname"`
	Type     string `json:"type"`
	Accuracy int    `json:"accuracy"`
	PP       int    `json:"pp"`
	Power    int    `json:"power"`
	Category string `json:"category"`
}

type category struct {
	English  string `json:"english"`
	Chinese  string `json:"chinese"`
	Japanese string `json:"japanese"`
}

func main() {
	app := fiber.New()
	app.Use(cors.New())

	mongoConn := flag.String("mongo", "mongodb://localhost", "Mongo DB Connection String")
	flag.Parse()

	ctx := context.Background()
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI(*mongoConn))
	defer client.Disconnect(ctx)
	pokemonDatabase := client.Database("pokemon")
	pokedex := pokemonDatabase.Collection("pokedex")
	// items := pokemonDatabase.Collection("items")
	// moves := pokemonDatabase.Collection("moves")
	// types := pokemonDatabase.Collection("types")

	app.Get("/pokedex/:id", func(c *fiber.Ctx) {
		var poke bson.M
		id, _ := strconv.Atoi(c.Params("id"))
		pokedex.FindOne(ctx, bson.M{"id": id}).Decode(&poke)

		data, _ := json.Marshal(poke)
		c.Type("application/json")
		c.Send(data)
	})

	app.Get("/pokedex/range/:startID/:endID", func(c *fiber.Ctx) {
		startID, _ := strconv.Atoi(c.Params("startID"))
		endID, _ := strconv.Atoi(c.Params("endID"))
		opts := options.Find()
		opts.SetSort(bson.D{{"id", 1}})
		sortCursor, _ := pokedex.Find(ctx, bson.D{
			{"id", bson.D{
				{"$gte", startID},
				{"$lt", endID},
			}},
		}, opts)
		var pokemonSorted []bson.M
		sortCursor.All(ctx, &pokemonSorted)

		data, _ := json.Marshal(pokemonSorted)
		c.Type("application/json")
		c.Send(data)
	})

	app.Listen(9001)
}
