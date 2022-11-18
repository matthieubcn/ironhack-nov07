// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;

                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

//Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
