import { Order } from "@/types";

export const waitingOrders: Order[] = [
	{
		"id": "63769c65d83733800ae02114",
		"table": "Mesa 1",
		"status": "WAITING",
		"products": [
			{
				"id": "63769c65d83733800ae02115",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63769c65d83733800ae02116",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T20:41:09.779Z"
	},
	{
		"id": "63768abeb0e6fb10c1c72071",
		"table": "Mesa 2",
		"status": "WAITING",
		"products": [
			{
				"id": "63768abeb0e6fb10c1c72072",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63768abeb0e6fb10c1c72073",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T19:25:50.150Z"
	}
]

export const inProductionOrders: Order[] = [
	{
		"id": "63769c65d83733800ae02114",
		"table": "Mesa 9",
		"status": "IN_PRODUCTION",
		"products": [
			{
				"id": "63769c65d83733800ae02115",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63769c65d83733800ae02116",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T20:41:09.779Z"
	},
	{
		"id": "63768abeb0e6fb10c1c72071",
		"table": "Mesa 7",
		"status": "IN_PRODUCTION",
		"products": [
			{
				"id": "63768abeb0e6fb10c1c72072",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63768abeb0e6fb10c1c72073",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T19:25:50.150Z"
	},
  {
		"id": "63769c65d83733800ae02114",
		"table": "Mesa 14",
		"status": "IN_PRODUCTION",
		"products": [
			{
				"id": "63769c65d83733800ae02115",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63769c65d83733800ae02116",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T20:41:09.779Z"
	},
	{
		"id": "63768abeb0e6fb10c1c72071",
		"table": "Mesa 17",
		"status": "IN_PRODUCTION",
		"products": [
			{
				"id": "63768abeb0e6fb10c1c72072",
				"product": {
					"id": "637442a72e060e12689f9fba",
					"name": "Qualquer nome",
					"description": "Qualquer descrição",
					"imagePath": "https://waiter-app.s3.amazonaws.com/1668563622087_ff8cecbb-335d-4f4e-8fa3-68f7a95e7f2a.png",
					"price": 1,
					"ingredients": [
						{
							"id": "637442a72e060e12689f9fbb",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "637442a72e060e12689f9fbc",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 1
			},
			{
				"id": "63768abeb0e6fb10c1c72073",
				"product": {
					"id": "6373c39623d36c94ef79e857",
					"name": "X-Tudo",
					"description": "O lanche adequado para família",
					"imagePath": "lanche.png",
					"price": 11,
					"ingredients": [
						{
							"id": "6373c39623d36c94ef79e858",
							"name": "Ovos",
							"icon": "🥚"
						},
						{
							"id": "6373c39623d36c94ef79e859",
							"name": "Bacon",
							"icon": "🥓"
						}
					],
					"category": "6373943cc287259cf970f736"
				},
				"quantity": 4
			}
		],
		"createdAt": "2022-11-17T19:25:50.150Z"
	}
]
