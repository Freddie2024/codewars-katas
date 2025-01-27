export function hello(name = ''): string {
    if (!name) {
      return 'Hello, World!';
    }
    const formattedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
  }