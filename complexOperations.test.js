import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

//non-mocked functions
describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('the param is a number, send message error', () => {
      expect(complexOperations.checkEmail(3)).toBe('The email should be an string');
    });
    it('the param is empty string, send message error', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be an string');
    });
    it('the param is empty, send message error', () => {
      expect(complexOperations.checkEmail()).toBe('The email should be an string');
    });
    it('the param is "@", send message error', () => {
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });
    it('the param is "asd@.com", send message error', () => {
      expect(complexOperations.checkEmail('asd@.com')).toBe('The email is invalid');
    });
    it('the param is "valid@gmail.com", is a valid Email', () => {
      expect(complexOperations.checkEmail('valid@gmail.com')).toBe('The email is valid');
    });
    it('the param is "invalid@ggmmaill.com", not send message error', () => {
      expect(complexOperations.checkEmail('invalid@ggmmaill.com')).not.toBe('The email is invalid');
    });
  });

  describe('calculateArea', () => {
    it('first param is empty, this figure is not supported', () => {
      expect(complexOperations.calculateArea('',3,2)).toBe(' is not supported');
    });
    it('first param is 0, this figure is not supported', () => {
      expect(complexOperations.calculateArea(0,3,2)).toBe('0 is not supported');
    });
    it('second param is not a number, and it must be a number', () => {
      expect(complexOperations.calculateArea('triangle',"three",2)).toBe('number1 and number2 should be numbers');
    });
    it('third param is not a number, and it must be a number', () => {
      expect(complexOperations.calculateArea('triangle',3,"two")).toBe('number1 and number2 should be numbers');
    });
    it('calculate area of rectangle', () => {
      expect(complexOperations.calculateArea('rectangle',3,2)).toBe(6);
    });
    it('calculate area of square', () => {
      expect(complexOperations.calculateArea('SQUARE',0,2)).toBe(0);
    });
    it('calculate area of triangle', () => {
      expect(complexOperations.calculateArea('triangle',-2,2)).not.toBe(2);
    });
    it('calculate area of circle', () => {
      expect(complexOperations.calculateArea('circle',5)).toBeCloseTo(78.53981);
    });
    it('calculate area of circle', () => {
      expect(complexOperations.calculateArea('cIrClE',8,3)).toBeCloseTo(201.061929);
    });
  });

  describe('sumGratherThan', () => {
    it('empty params, send message error', () => {
      expect(complexOperations.sumGratherThan()).toBe('The params should be numbers');
    });
    it('wrong params, send message error', () => {
      expect(complexOperations.sumGratherThan([],undefined)).toBe('The params should be numbers');
    });
    it('1 + 2 is not greater than 3', () => {
      expect(complexOperations.sumGratherThan(1,2,3)).toBe('3 is less than 3');
    });
    it('1 + 2 is greater than -3', () => {
      expect(complexOperations.sumGratherThan(1,2,-3)).not.toBe('3 is greater than -3');
    });
    it('1 + 2 is greater than -3', () => {
      expect(complexOperations.sumGratherThan(1,2,-3)).toBe('3 is grather than -3');
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('empty params, send message error', () => {
      expect(complexOperations.intersectionBetweenArrays()).toBe('The params should be arrays');
    });
    it('first wrong param, send message error', () => {
      expect(complexOperations.intersectionBetweenArrays(3,[])).toBe('The params should be arrays');
    });
    it('second wrong param, send message error', () => {
      expect(complexOperations.intersectionBetweenArrays([],3)).toBe('The params should be arrays');
    });
    it('there arent intersection between arrays ', () => {
      expect(complexOperations.intersectionBetweenArrays([4,5,6],[1,2,3])).toBe('There are not matching elements');
    });
    it('there arent intersection between arrays ', () => {
      expect(complexOperations.intersectionBetweenArrays([4,-5,6],[1,3,23,-5,3])).toEqual([-5]);
    });
    it('there arent intersection between arrays ', () => {
      expect(complexOperations.intersectionBetweenArrays([4,0,"a",5,6],[1,3,2,"a",3,-5,3,0])).toEqual([0,"a"]);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('first param is wrong, send message error ', () => {
      expect(complexOperations.sortArrayOfObjectsByKey(1,3)).toBe('The first param should be an array');
    });
    it('second param is wrong, send message error ', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([1],3)).toBe('The second param should be an string');
    });
    it('the string doesnt a correct key ', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([2,3,1],'a')).toBe('Some elements in the array does not have the a property');
    });
    it('sort array by key a', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{a: 2},{a: 3},{a: 1}],'a')).toEqual([{a: 1},{a: 2},{a: 3}]);
    });
    it('sort array by key key', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{key: 2},{notKey: 4},{key: 3},{key: 1}],'key')).toContain('does not have the key property');
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('param wrong, send message error', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(2)).toBe('The param should be an array');
    });
    it('param wrong, send message error', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers()).toBe('The param should be an array');
    });
    it('the array contains an element that is not a number, send message error', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,2,3,'four',5])).toBe('The array should have only numbers');
    });
    it('number of even, number of odd', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1,1,2,3,5,8])).toEqual({ even: 2, odd: 4 });
    });
    it('number of even, number of odd', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([1.4,2.5,7])).toEqual({ even: 0, odd: 3 });
    });
  });
});

//mocked functions ---------------------------------------------------------------

describe('checkEmail mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it("email isn't a string", () => {
    jest.spyOn(basicOperations, 'isString').mockReturnValue(false)
    expect(complexOperations.checkEmail('mock')).toBe('The email should be an string')
  })
  it("email value isn't correct", () => {
    jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(null)
    expect(complexOperations.checkEmail('mock')).toBe('The email is invalid')
  })
  it('email valid', () => {
    jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true)
    expect(complexOperations.checkEmail('mock')).toBe('The email is valid')
  })
})

describe('calculateArea mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('multiplication in triangle figure', () => {
    jest.spyOn(basicOperations, 'multip').mockReturnValue(30)
    expect(complexOperations.calculateArea('triangle',0,0)).toBe(15)
  })  
  it('division in triangle figure', () => {
    jest.spyOn(basicOperations, 'division').mockReturnValue(65.3)
    expect(complexOperations.calculateArea('triangle',0,0)).toBeCloseTo(65.300001)
  })
  it('figure not supported', () => {
    jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false)
    expect(complexOperations.calculateArea('triangle',0,0)).toBe("triangle is not supported")
  })
  it('numbers incorrects', () => {
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
    expect(complexOperations.calculateArea('rectangle',2,3)).toBe("number1 and number2 should be numbers")
  })
  it('area of circle', () => {
    jest.spyOn(basicOperations, 'exponent').mockReturnValue(1234567)
    expect(complexOperations.calculateArea('circle',2,3)).toBe(3878506.61756439)
  })
})


describe('sumGratherThan mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('params are not numbers', () => {
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
    expect(complexOperations.sumGratherThan(4,2,0)).toBe('The params should be numbers')
  })  
  it('sum of first and second params', () => {
    jest.spyOn(basicOperations, 'sum').mockReturnValue(80000)
    expect(complexOperations.sumGratherThan(1,1,3)).toBe('80000 is grather than 3')
  })  
  it('sum of first and second params', () => {
    jest.spyOn(basicOperations, 'sum').mockReturnValue(-80000)
    expect(complexOperations.sumGratherThan(1,1,3)).toBe('-80000 is less than 3')
  }) 
})

describe('intersectionBetweenArrays mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('isArray and arrayIntersection are modified to return [123,4]', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
    jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([123,4])
    expect(complexOperations.intersectionBetweenArrays(4,'not an array')).toEqual([123,4])
  }) 
  it("a param isn't an array ", () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(false)
    expect(complexOperations.intersectionBetweenArrays(["array1"],["array",2])).toEqual('The params should be arrays')
  }) 
  it("no parameter is repeated", () => {
    jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([])
    expect(complexOperations.intersectionBetweenArrays(["array"],["array",2])).toEqual("There are not matching elements")
  }) 
})

describe('sortArrayOfObjectsByKey mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('first param is not an array', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(false)
    expect(complexOperations.sortArrayOfObjectsByKey([1],"asd")).toEqual('The first param should be an array')
  }) 
  it('second param is not a key', () => {
    jest.spyOn(basicOperations, 'isString').mockReturnValue(false)
    expect(complexOperations.sortArrayOfObjectsByKey([{key: "a"}],"key")).toContain('The second ')
  }) 
  it('array with elements other than the key', () => {
    jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false)
    expect(complexOperations.sortArrayOfObjectsByKey([{hola: "hola"}],"hola")).toContain('Some elements in the array does not have the hola property')
  }) 
  it('intersection of arrays', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
    jest.spyOn(basicOperations, 'isString').mockReturnValue(true)
    jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true)
    jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(["mock"])
    expect(complexOperations.sortArrayOfObjectsByKey([1],"asd")).toEqual(["mock"])
  }) 
})

describe('numberOfOddAndEvenNumbers mocked function', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  it('param is not an array', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(false)
    expect(complexOperations.numberOfOddAndEvenNumbers([1])).toEqual('The param should be an array')
  }) 
  it('array contains elements that arent numbers', () => {
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
    expect(complexOperations.numberOfOddAndEvenNumbers([1])).toEqual('The array should have only numbers')
  }) 
  it('number of even and odd', () => {
    jest.spyOn(basicOperations, 'isArray').mockReturnValue(true)
    jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true)
    jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue(["a",2,4])
    jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([])
    expect(complexOperations.numberOfOddAndEvenNumbers([0, 0, 0])).toEqual({ even: 0, odd: 3 })
  }) 
})