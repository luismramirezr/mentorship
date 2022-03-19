module.exports = {
  'apps/**/*.{js,ts,jsx,tsx}': (files) =>
    `yarn precommit ${files
      .map((file) => file.replace(/((apps)|(packages))\/\w+\//, ''))
      .join(' ')}`,
};
