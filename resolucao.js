//Transforme as funções declarativas abaixo em Arrow Functions
const upperName = function (name) {
    return name.toUpperCase();
  };
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }


//-------------------------------------------- resposta

const upperName = (name) => {
    return name.toUppercase();
}

const myFunction = (p1, p2) => {
    return p1 * p2;
}

const toCelcius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32)
}

//===========================================
//Destructuring - Desestruturação
//Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2 linhas de código
function handleMouseMove(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
  }

//------------------------------------------- resposta

function handleMouseMove(event){
    const  [clientX, clienteY] = event
    console.log(event)
}

//===========================================
//A partir do objeto abaixo, instancie apenas uma variável que receba ​first utilizando destructuring
const obj = { first: 'Jane', last: 'Doe' };


//------------------------------------------- resposta 


let {frist} = {frist : jane}

//============================================
//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors
company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
      shirts: {
        colors: ['red', 'green', 'blue'],
      },
      socks: {
        colors: ['cyan', 'magenta', 'yellow'],
      },
    },
  };

//----------------------------------------- resposta


var {name: n} = company

var {shirts : [...colors], socks : [...colors]} = company;

//============================================
//Rest & Spread
//Utilizando um operador clone o objeto c​lothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
  };

//-------------------------------------------- resposta

var cloneClothes = {...clothes}

//===========================================
//Novamente utilizando um operador, clone o objeto c​ lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ ants, shirts ​e​ socks


//-------------------------------------------- resposta

const y = {...clothes, 'colors':['yellow', 'purple']}

//============================================
//Arrays e seus métodos
//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
var numbers = [4, 9, 16, 25];


//-------------------------------------------- resposta 

var numeros = [4, 9, 16, 25];
var raizQuadrada = numeros.map(Math.sqrt)

//=============================================
//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];


//------------------------------------------- resposta

var numeros = [65, 44, 12, 4];
var multiplos = numeros.map(function(num)
 { return num * 10 })

 //=========================================
 //A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
var ages = [32, 33, 16, 40];


//----------------------------------------- resposta

 function maiorIdade(adulto) {
    return adulto >= 18;
  }
  
  var idades = [32, 33, 16, 40].filter(maiorIdade);
 
  //=========================================
  //A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];


//----------------resposta---------------------------


  let dogs = data.filter((animal) => {
    return animal.type === 'dog';
  })

  //==========================================
  //Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​


//----------------resposta-------------------------------

var somaIdades = data.reduce((sum, dog) => {
    return sum + dog.age;
  }, 0);
  console.log(somaIdades);

//=============================================

//Parte B - Hora do Jogo!
//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors;
    return colors.length;
  };



//-------------------resposta---------------------



  //=========================================
  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks



  var getShirtsColorsAmount = (company) =>{
   
   // colors = company.products.shirts.colors;
    let {colors} = company;
    return colors;
}


    //========================================
  //A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks

    const clothes = {
        pants: { colors: ['black', 'blue'] },
        shirts: { colors: ['white', 'red'] },
        socks: { colors: ['beige', 'gray'] },
      };
      
    const twoClothes = {shirts: { colors: ['white', 'red'] }, 
    socks: { colors: ['beige', 'gray'] }}

    const noPants = ({pants, ...rest}) => rest;


    const newClothes = {
        ...noPants(clothes),
        ...twoClothes
    };

    console.log(newClothes)


    //==========================================================
    //Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
    const arr = [1, 2, 3];
    const arr2 = [4, 5, 6];
    

    //------------------resposta----------------------
    const arrr = [arr2.shift(), arr.shift()]
    
    const agrupa = [...arr,...arr2]
    
    console.log(agrupa);

    //=======================================================

    var nomes = () => {

        persons = [
            { firstname: 'Malcom', lastname: 'Reynolds' },
            { firstname: 'Kaylee', lastname: 'Frye' },
            { firstname: 'Jayne', lastname: 'Cobb' }
          ];

         //-------------resposta-------------------
          var nomeSobrenome = persons.concat(persons.firstname,[persons.lastname]);


          return nomeSobrenome;
    }









