export default ({ dependencyInjectionRepository }) => ({
  execute: () => {
    console.log('----- service!');
    dependencyInjectionRepository.execute();
  }
});
