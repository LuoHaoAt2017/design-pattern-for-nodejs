class H2O {
  constructor() {
    console.log('create h2o');
  }
}

class Steam extends H2O {
  constructor() {
    super();
    console.log('steam h2o');
  }
}

class Water extends H2O {
  constructor() {
    super();
    console.log('water h2o');
  }
}

const app =  new Steam();

export default app;