import * as categoriesAPI from "./fakeCategoryService"

const products = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Aqura G4",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 6,
    imageUrl:
      "https://i.pinimg.com/564x/8f/c1/bd/8fc1bd0102723770facececab5bc0805.jpg",
    price: 112.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Google Nest",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 5,
    imageUrl:
      "https://i.pinimg.com/564x/a7/25/4a/a7254a52880f9d1e719cf115f46a8914.jpg",
    price: 9.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Welcome Eye",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 8,
    imageUrl:
      "https://i.pinimg.com/564x/22/c9/68/22c96830f7142a2289811e25c3f7903e.jpg",
    price: 135
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Wifi Doorlock",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Smart Doorlocks" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/564x/dd/6d/87/dd6d87f84f87f9cc4f1e57d38bfebf86.jpg",
    price: 115
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Lockly",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Smart Doorlocks" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/736x/11/91/18/1191187e308a9da55068fd6c3ea1d9b3.jpg",
    price: 207
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Smart Card Doorlock",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Smart Doorlocks" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/564x/57/f0/89/57f08963d7faab851ea4267b13e927b1.jpg",
    price: 55
  },
  {
    _id: "5b21ca3eeb7f6fbccd47281f",
    name: "Ultraloq Bolt",
    category: { _id: "5b21ca3eeb7f6fbccd471814", name: "Smart Doorlocks" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/564x/4e/b1/d5/4eb1d529cd96d10042dada9a814312b3.jpg",
    price: 15
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Belkin",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Smart Speakers" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/564x/44/d0/12/44d01264ba01ce99cb0e4e198ddd121f.jpg",
    price: 24
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Bose Portable",
    category: { _id: "5b21ca3eeb7f6fbccd471820", name: "Smart Speakers" },
    numberInStock: 4,
    imageUrl:
      "https://i.pinimg.com/564x/7d/b3/4d/7db34d7c03ef055b56a16bee707946e0.jpg",
    price: 35
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821f",
    name: "Generic Smart ",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 7,
    imageUrl:
      "https://i.pinimg.com/736x/ed/78/fc/ed78fcbe6c04053e8889e54114e3f345.jpg",
    price: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd361721",
    name: "Imou",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/67/19/e7/6719e793b64fd79f07057aa63e2993f2.jpg",
    price: 13.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd371711a",
    name: "Netatmo",
    category: { _id: "5b21ca3eeb7f6fbccd471818", name: "Smart Doorbells" },
    numberInStock: 5,
    imageUrl:
      "https://i.pinimg.com/564x/6d/d4/02/6dd402e7e6d3bba167ae3c7e938e7b09.jpg",
    price: 10
  },
  //lightings
  {
    _id: "5b21ca3eeb7f6fbccd371711b",
    name: "Европа",
    category: { _id: "5b21ca3eeb7f6fbccd471819", name: "Smart Lightings" },
    numberInStock: 2,
    imageUrl:
      "https://i.pinimg.com/736x/20/8d/38/208d38b3cc96262f662bd0f12bbad311.jpg",
    price: 13
  },
  {
    _id: "5b21ca3eeb7f6fbccd371711c",
    name: "Touch Sensitive",
    category: { _id: "5b21ca3eeb7f6fbccd471819", name: "Smart Lightings" },
    numberInStock: 9,
    imageUrl:
      "https://i.pinimg.com/564x/ff/53/92/ff539262a571dba4bea6e86e943b6219.jpg",
    price: 19
  },
  {
    _id: "5b21ca3eeb7f6fbccdd371711d",
    name: "RGBAI",
    category: { _id: "5b21ca3eeb7f6fbccd471819", name: "Smart Lightings" },
    numberInStock: 2,
    imageUrl:
      "https://i.pinimg.com/564x/14/44/b0/1444b0b395f440071b5e7a0b965becb9.jpg",
    price: 12
  },
  {
    _id: "5b21ca3eeb7af6fbccd371711e",
    name: "WBM",
    category: { _id: "5b21ca3eeb7f6fbccd471819", name: "Smart Lightings" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/1c/82/0d/1c820d333889a0803e7b7572bb6bb87d.jpg",
    price: 15
  },
  //thermostat
  {
    _id: "5b21ca3eeb7af6fbccd371712",
    name: "Google Nest Thermostat",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Smart Thermostats" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/b7/7b/6d/b77b6d0357b69411f85b3beddf3d6b99.jpg",
    price: 110.5
  },
  {
    _id: "5b21ca3eeb7af6fbccd371712b",
    name: "Aura Smart",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Smart Thermostats" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/50/aa/76/50aa76dbe58ed5a2d61a3160d37585fb.jpg",
    price: 18.50
  },
  {
    _id: "5b21ca3eeb7af6fbccd12371712c",
    name: "Kohl's",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Smart Thermostats" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/d5/a5/e4/d5a5e458cfc3df3c995c75b7185dddf6.jpg",
    price: 22.5
  },
  {
    _id: "5b21ca3eeb7af6fbccd323571713d",
    name: "Black+Decker",
    category: { _id: "5b21ca3eeb7f6fbccd471821", name: "Smart Thermostats" },
    numberInStock: 3,
    imageUrl:
      "https://i.pinimg.com/564x/d8/e0/cf/d8e0cf5a6b4085ef4515cdad484159c7.jpg",
    price: 23.8
  }

]

export function getProducts() {
  return products
}

export function getProduct(id) {
  return products.find(p => p._id === id)
}

export function saveProduct(product) {
  let productInDb = products.find(p => p._id === product._id) || {}
  productInDb.name = product.name
  productInDb.category = categoriesAPI.categories.find(
    c => c._id === product.categoryId
  )
  productInDb.numberInStock = product.numberInStock
  productInDb.price = product.price
  productInDb.imageUrl = product.imageUrl

  if (!productInDb._id) {
    productInDb._id = Date.now().toString()
    products.push(productInDb)
  }

  return productInDb
}

export function deleteProduct(id) {
  let productInDb = products.find(p => p._id === id)
  products.splice(products.indexOf(productInDb), 1)
  return productInDb
}
