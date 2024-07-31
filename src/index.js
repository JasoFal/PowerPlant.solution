const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControlOne = storeState();
const stateControlTwo = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const blueFood = changeState("soil")(5);
const hydrate = changeState("water")(5);
const light = changeState("light")(5);
const magicPlant = changeState("mana")(5);
const castSpell = changeState("mana")(-20);


window.onload = function() {
  document.getElementById('feed-one').onclick = function() {
    const newStateOne = stateControlOne(blueFood);
    document.getElementById('soil-value-one').innerText = `Soil: ${newStateOne.soil}`;
  };

  document.getElementById('feed-two').onclick = function() {
    const newStateTwo = stateControlTwo(blueFood);
    document.getElementById('soil-value-two').innerText = `Soil: ${newStateTwo.soil}`;
  };

  document.getElementById('hydrate-one').onclick = function() {
    const newStateOne = stateControlOne(hydrate);
    document.getElementById('water-value-one').innerText = `Water: ${newStateOne.water}`;
  };

  document.getElementById('hydrate-two').onclick = function() {
    const newStateTwo = stateControlTwo(hydrate);
    document.getElementById('water-value-two').innerText = `Water: ${newStateTwo.water}`;
  };

  document.getElementById('light-one').onclick = function() {
    const newStateOne = stateControlOne(light);
    document.getElementById('light-value-one').innerText = `Light: ${newStateOne.light}`;
  };

  document.getElementById('light-two').onclick = function() {
    const newStateTwo = stateControlTwo(light);
    document.getElementById('light-value-two').innerText = `Light: ${newStateTwo.light}`;
  };

  document.getElementById('restore-mana').onclick = function() {
    const newStateTwo = stateControlTwo(magicPlant);
    document.getElementById('show-mana-value').innerText = `Mana: ${newStateTwo.mana}`;
  };

  document.getElementById('cast-spell').onclick = function() {
    document.getElementById('cast-spell').innerText = "Cast spell";
    const currentState = stateControlTwo();
    if (currentState.mana >= 20) {
      const newStateTwo = stateControlTwo(castSpell);
      document.getElementById('show-mana-value').innerText = `Mana: ${newStateTwo.mana}`;
    } else {
      document.getElementById('cast-spell').innerText = "Not enough mana!";
    }
  };

  // document.getElementById('show-state-one').onclick = function() {
  //   const currentStateOne = stateControlOne();
  //   document.getElementById('soil-value-one').innerText = `Soil: ${currentStateOne.soil}`;
  //   document.getElementById('water-value-one').innerText = `Water: ${currentStateOne.water}`;
  //   document.getElementById('light-value-one').innerText = `Light: ${currentStateOne.light}`;
  // };

  // document.getElementById('show-state-two').onclick = function() {
  //   const currentStateTwo = stateControlTwo();
  //   document.getElementById('soil-value-two').innerText = `Soil: ${currentStateTwo.soil}`;
  //   document.getElementById('water-value-two').innerText = `Water: ${currentStateTwo.water}`;
  //   document.getElementById('light-value-two').innerText = `Light: ${currentStateTwo.light}`;
  //   document.getElementById('show-mana-value').innerText = `Mana: ${currentStateTwo.mana}`;
  // };
};