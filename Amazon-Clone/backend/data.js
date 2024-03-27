import bcrypt from 'bcryptjs';

const data = {
	users: [
		{
			name: 'Jeff',
			email: 'jzhang459@myseneca.ca',
			password: bcrypt.hashSync('12345678', 8),
			isAdmin: true,
		},
		{
			name: 'admin',
			email: 'admin@ac.com',
			password: bcrypt.hashSync('111111', 8),
			isAdmin: true,
		},
		{
			name: 'user',
			email: 'user@ac.com',
			password: bcrypt.hashSync('111111', 8),
			isAdmin: false,
		},
	],
	categories: [
		{
			desc: 'Electronics',
		},
		{
			desc: 'Clothes',
		},
		{
			desc: 'Home',
		},
		{
			desc: 'Sport',
		},
	],
	products: [
		{
			title: 'Hoodie',
			cateID: '60a015a4a6986e0e882934d8',
			isPromo: false,
			isBestSeller: false,
			price: 40,
			quantitySale: 5,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1610582144787-eda2e6f293b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG9vZGllfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Shoes',
			cateID: '60a015a4a6986e0e882934d8',
			isPromo: true,
			isBestSeller: true,
			price: 150,
			quantitySale: 83,
			quantityInStock: 100,
			image:
				'https://images.unsplash.com/photo-1546200843-d3a4e1e0103d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1309&q=80',
		},
		{
			title: 'Laptop',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: false,
			price: 2000,
			quantitySale: 9,
			quantityInStock: 100,
			image:
				'https://images.unsplash.com/photo-1590889177644-58ae7414f30c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
		},
		{
			title: 'T-shirt',
			cateID: '60a015a4a6986e0e882934d8',
			isPromo: false,
			isBestSeller: true,
			price: 20,
			quantitySale: 76,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1547337784-e15710a7cfe5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTcxfHx0JTIwc2hpcnR8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Blazer',
			cateID: '60a015a4a6986e0e882934d8',
			isPromo: false,
			isBestSeller: false,
			price: 60,
			quantitySale: 45,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1493146146946-e907f69cdf23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJsYXplcnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'PS5',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: true,
			isBestSeller: false,
			price: 900,
			quantitySale: 1,
			quantityInStock: 5,
			image:
				'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHM1fGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Soccer Boots',
			cateID: '60a015a4a6986e0e882934da',
			isPromo: false,
			isBestSeller: false,
			price: 250,
			quantitySale: 40,
			quantityInStock: 10000,
			image:
				'https://images.unsplash.com/photo-1612387048732-1840c48c0976?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c29jY2VyJTIwYm9vdHN8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Soccer Ball',
			cateID: '60a015a4a6986e0e882934da',
			isPromo: false,
			isBestSeller: false,
			price: 200,
			quantitySale: 20,
			quantityInStock: 10000,
			image:
				'https://images.unsplash.com/photo-1614632537190-23e4146777db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29jY2VyJTIwYmFsbHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Basketball',
			cateID: '60a015a4a6986e0e882934da',
			isPromo: false,
			isBestSeller: false,
			price: 100,
			quantitySale: 30,
			quantityInStock: 10000,
			image:
				'https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhc2tldGJhbGx8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Mouse',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: true,
			price: 80,
			quantitySale: 140,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZzUwMiUyMG1vdXNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Keyboard',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: true,
			price: 130,
			quantitySale: 150,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1613332752222-129f41f9e5db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZHVyZ29kfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Monitor',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: false,
			price: 500,
			quantitySale: 30,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1610576660726-1b2704ee0550?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bW9uaXRvciUyMGFzdXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Kindle',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: true,
			isBestSeller: true,
			price: 100,
			quantitySale: 90,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1504598561342-6b76820ef3e6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpbmRsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Camera',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: false,
			price: 120,
			quantitySale: 25,
			quantityInStock: 500,
			image:
				'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtZXJhfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Speaker',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: false,
			price: 90,
			quantitySale: 34,
			quantityInStock: 500,
			image:
				'https://images.unsplash.com/photo-1502556112530-246c3be76309?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlciUyMG1hcnNoYWxsfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Charger',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: true,
			price: 20,
			quantitySale: 3000,
			quantityInStock: 10000,
			image:
				'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNoYXJnZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Smartphone',
			cateID: '60a015a4a6986e0e882934d7',
			isPromo: false,
			isBestSeller: true,
			price: 1000,
			quantitySale: 100,
			quantityInStock: 1000,
			image:
				'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Chair',
			cateID: '60a015a4a6986e0e882934d9',
			isPromo: false,
			isBestSeller: false,
			price: 50,
			quantitySale: 14,
			quantityInStock: 100,
			image:
				'https://images.unsplash.com/photo-1561677978-583a8c7a4b43?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Sofa',
			cateID: '60a015a4a6986e0e882934d9',
			isPromo: false,
			isBestSeller: false,
			price: 500,
			quantitySale: 4,
			quantityInStock: 100,
			image:
				'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c29mYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
		{
			title: 'Bed',
			cateID: '60a015a4a6986e0e882934d9',
			isPromo: false,
			isBestSeller: false,
			price: 1000,
			quantitySale: 2,
			quantityInStock: 100,
			image:
				'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		},
	],
};

export default data;
