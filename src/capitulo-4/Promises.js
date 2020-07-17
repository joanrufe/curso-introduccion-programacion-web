let fakeAsync = new Promise((resolve, reject) => {
  const randomBoolean = Math.random() > 0.5;
  // Si Llamamos a resolve(...)la promesa finalizará con éxito,
  // y si llamamos reject(...) la promesa falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  setTimeout(function() {
    if (randomBoolean) {
      resolve("¡Éxito!"); // ¡Todo salió bien!
    } else {
      reject("¡Error aleatorio!");
    }
  }, 1);
});

fakeAsync.then(successMessage => {
  // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
  // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
  console.log("¡Sí! " + successMessage);
});

fakeAsync.catch(err => {
  console.log("Error Msg: ", err);
  return false;
});
