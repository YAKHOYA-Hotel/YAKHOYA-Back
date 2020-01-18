{
	"info": {
		"_postman_id": "edced8d3-c847-476d-b192-51e183018d62",
		"name": "Doc routes Yakhouya Hotel",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "CompoReservation",
			"item": [
				{
					"name": "Poste one reservation",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/reservation",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"type": "text",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "\n{\n    \"dateEntre\":\"2020,12,19\",\n    \"dateSortie\":\"2020,12,20\",\n    \"idClient\":\"Mehdi1\",\n    \"idHotel\":\"Ares-Eiffel\",\n    \"typeRoom\":\"Simple\"\n}\n",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/reservation",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"reservation"
									]
								},
								"description": "Cette requête nous permet d'ajouter des réservations ainsi que son identifiant à la liste des reservations d'utilisateur en cours."
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Delete one reservation",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/reservation/:IdReservation",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/reservation/5e1d714c10c996286c0b11a7",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"reservation",
										"5e1d714c10c996286c0b11a7"
									]
								},
								"description": "La requête nous permet de supprimer une reservation de la collection des reservations ainsi que la liste des reservations disponible sur un document d'utilisateur"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Get all reservations",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/reservation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/reservation",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"reservation"
									]
								},
								"description": "Cette requête nous permet de voir toutes les réservations disponile"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Get one reservation",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/reservation/:IdReservation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/reservation/5e1d717410c996286c0b11a9",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"reservation",
										"5e1d717410c996286c0b11a9"
									]
								},
								"description": "La requête nous permet de voir la resrvation dont l'identifiant égale à idReservation passé en params "
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "CompoRoom",
			"item": [
				{
					"name": "Get one room",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/room/:IdRoom",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/room/5e10c49969a74b0a94f8cbab",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"room",
										"5e10c49969a74b0a94f8cbab"
									]
								},
								"description": "Voir une seul chambre dont l'identifiant est égale à idRoom"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Get all rooms",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/room",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/room",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"room"
									]
								},
								"description": "La requête nous permet de voir toutes les chambres.\n"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Post one room",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/room",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "",
										"name": "Content-Type",
										"value": "",
										"type": "text"
									},
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"captureRoom\":\"d6.jpg\",\n    \"typeRoom\":\"double\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/room",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"room"
									]
								},
								"description": "Ajouter une nouvelle chambre "
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Update one room",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/room/:IdRoom",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"captureRoom\": \"d5.png\",\r\n    \"typeRoom\":\"Double\",\r\n\t\"lstReservations\": []\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/room/5e10c49969a74b0a94f8cbab",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"room",
										"5e10c49969a74b0a94f8cbab"
									]
								},
								"description": "Modifier les informations d'une chambre"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "CompoUser",
			"item": [
				{
					"name": "Post one user",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/user",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGltMTI1NiIsImVtYWlsIjoic2FsaW0xODA5QGdtYWlsLmNvbSIsImlhdCI6MTU3NjU4OTk3MywiZXhwIjoxNTc2NTkzNTczfQ.vtuHHR1XxRFi11Mnzvn6qsx7VbGzg0-4tTwFC5tSw4E",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\"name\":\"ZAIDI\",\n\"lastname\":\"Mohand Ameziane\",\n\"age\":24,\n\"username\" : \"Mohand4\",\n\"password\" : \"Mohand4\",\n\"email\" : \"mohand19953@gmail.com\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/user?",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"user"
									],
									"query": [
										{
											"key": "id",
											"value": "5ca2685087cf0102f401068a%26key",
											"disabled": true
										}
									]
								},
								"description": "Ajouter un nouveau utilisateur"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Login user",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/user/login",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"password\":\"Mehdi1\",\n\t\"username\":\"Mehdi1\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/user/login",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"user",
										"login"
									]
								},
								"description": "Route permet d'avoir le token et le renvoyer au back pour avoir les autres informations d'utilisateur."
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Dycript token",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/user/decrypt",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/x-www-form-urlencoded",
										"type": "text"
									},
									{
										"key": "Authorization",
										"value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1laGRpMSIsImVtYWlsIjoibWVoZGlAZ21haWwuY29tIiwibmFtZSI6IlpBSURJIiwibGFzdG5hbWUiOiJNZWhkaSIsImlhdCI6MTU3OTM2OTg2NSwiZXhwIjoxNTc5MzczNDY1fQ.bF_o-PY_R__9PCVHZV1wuqJpejhZd0h5P7UKf_X_CvE",
										"type": "text"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [],
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/user/decrypt",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"user",
										"decrypt"
									]
								},
								"description": "Décripter le token et avoir toutes les infos sur le user"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Update one user",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/user/IdUser",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"name\":\"ZAIDI\",\n    \"lastname\":\"Bezza\",\n    \"age\":11,\n    \"username\":\"Momoh\",\n    \"mail\":\"momoh@gmail.com\",\n    \"lstReservations\": []\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/user/Mohand4",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"user",
										"Mohand4"
									]
								},
								"description": "Modifier les informations d'un utilisateur."
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Show all reservations of user",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/user/PseudoUnique",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/user/Larbi1",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"user",
										"Larbi1"
									]
								},
								"description": "Voir toutes les réservations du client"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				}
			],
			"protocolProfileBehavior": {}
		},
		{
			"name": "CompoHotel",
			"item": [
				{
					"name": "Post one hotel",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/hotel",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"nameHotel\":\"Test hotel\",\n\t\"adressHotel\":\"Test adr\",\n\t\"CPHotel\":94600,\n\t\"cityHotel\":\"Choisy\",\n\t\"nbrChambresDoubles\":6,\n\t\"nbrChambresSimple\":12,\n\t\"nbrChambresFamilliales\":2,\n\t\"nbrChambresPresidentilles\":3\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/hotel",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"hotel"
									]
								},
								"description": "Ajouter un nouveau hôtel"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Show all hotels",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/hotel",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/hotel",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"hotel"
									]
								},
								"description": "Voir tous les hôtels"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Show one hotel",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/hotel/:idHotel",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/hotel/5e165af46e7d5b4f44925899",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"hotel",
										"5e165af46e7d5b4f44925899"
									]
								},
								"description": "Voir un seul hôtel\t"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Update one hotel",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/hotel/:IdHotel",
							"request": {
								"method": "PUT",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"nameHotel\": \"Yakhouya Hotel 2\",\r\n    \"adressHotel\":\"01 rue Matoub\",\r\n    \"CPHotel\":\"75000\",\r\n    \"cityHotel\":\"Paris\",\r\n    \"nbrChambresDoubles\":20,\r\n    \"nbrChambresSimple\":50,\r\n    \"nbrChambresFamilliales\":30,\r\n    \"nbrChambresPresidentilles\":10\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/hotel/5e165af46e7d5b4f44925899",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"hotel",
										"5e165af46e7d5b4f44925899"
									]
								},
								"description": "Modifier un seul hôtel"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				},
				{
					"name": "Delete one hotel",
					"item": [
						{
							"name": "http://yakhouya-app.herokuapp.com/hotel/IdHotel",
							"request": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://yakhouya-app.herokuapp.com/hotel/5e11ec25fdf1405f6c517bf7",
									"protocol": "http",
									"host": [
										"yakhouya-app",
										"herokuapp",
										"com"
									],
									"path": [
										"hotel",
										"5e11ec25fdf1405f6c517bf7"
									]
								},
								"description": "Supprimer un hôtel"
							},
							"response": []
						}
					],
					"protocolProfileBehavior": {},
					"_postman_isSubFolder": true
				}
			],
			"protocolProfileBehavior": {}
		}
	],
	"protocolProfileBehavior": {}
}