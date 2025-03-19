export function well(x: string[]): string{
    let goodIdeas = 0;
    for(let i = 0; i < x.length; i++) {
      if(x[i] === 'good') {
        goodIdeas += 1;
      }
    }
    if(goodIdeas > 2) {
    return 'I smell a series!';
    } else if(goodIdeas >= 1) {
    return 'Publish!';
    } else {
      return 'Fail!';
    }
  }