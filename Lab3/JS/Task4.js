var products = new Set(["Линейка", "Апельсин", "Тетрадь"]);

let choice = 1;

while (choice != 0) {
  choice = prompt(
    `1 - добавить элемент в список\n2 - удалить элемент из списка\n3 - проверить наличие товара` +
      `\n4 - количество товаров в списке\n5 - вывод всего списка\n6 - выход`
  );

  switch (choice) {
    case "1": {
      const productNew = prompt("Введите товар, который надо добавить: ");
      products.add(productNew);
      alert(`Товар добален!`);
      break;
    }

    case "2": {
      let list = "";
      for (let product of products) {
        list += product + " ";
      }
      const productDel = prompt(`Введите товар, который надо удалить (${list}): `);
      products.delete(productDel);
      alert(`Товар удалён!`);
      break;
    }
    case "3": {
      let list = "";
      for (let product of products) {
        list += product + " ";
      }
      const productHas = prompt(
          `Список товаров для выбора: ${list}`
      );

      if (products.has(productHas) == true) {
        alert(`Продукт ${productHas} есть!`);
      } else {
        alert(`Продукт ${productHas} отсутствует!`);
      }
      break;
    }

    case "4": {
      alert("Количество товаров: " + products.size);
      break;
    }

    case "5": {
      let arrEx4 = "";
      for (let product of products) {
        arrEx4 += product + " ";
      }
      alert(`Ваши товары:\n` + arrEx4);
      break;
    }
    case "6": {
      choice = 0;
      break;
    }
  }
}
