# Recipe App

## Description

Design the architecture for a simple recipe collection application where users can manage their favorite recipes.

## Architecture of the Recipe app

![Alt Text](diagram/recipe%20app.png)

Recipe will store in the **Database**
The frontend communicate with the backend through **APIs**

## Creating a new Recipe:

POST
/api/recipes
Content-Type: application/json
request formatted recipe object in JSON

```json
{
  "title": "Fruit Salad",
  "ingredients": "Kiwi, Oranges",
  "instructions": "Mix the fruits well in the bowls"
}
```

response: JSON

```json
{
  "id": 2,
  "title": "Fruit Salad",
  "ingredients": "Kiwi, Oranges",
  "instructions": "Mix the fruits well in the bowls",
  "status_id": 2,
  "user_id": 2,
  "created": "2025-12-15 10:30:00",
  "due_date": "2025-01-20 17:00:00"
}
```

**status: 201**

## Sequence Diagram

![Alt Text](diagram/recipe%20app_%20view%20specific%20recipe.png)
![Alt Text](diagram/recipe%20app_%20add%20new%20recipe.png)
![Alt Text](diagram/recipe%20app_%20delete%20a%20recipe.png)
![Alt Text](diagram/recipe%20app_%20edit%20a%20recipe.png)
