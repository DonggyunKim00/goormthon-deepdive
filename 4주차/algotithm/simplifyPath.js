// https://leetcode.com/problems/simplify-path/

const simplifyPath = (path) => {
  const paths = path.split('/');
  const result = [];

  console.log(paths);

  for (const currentPath of paths) {
    switch (currentPath) {
      case '.':
      case '':
        break;
      case '..':
        result.pop();
        break;
      default:
        result.push(currentPath);
    }
  }

  return '/' + result.join('/');
};
