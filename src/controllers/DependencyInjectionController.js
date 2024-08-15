export default ({ dependencyInjectionService }) => ({
  execute: (req, res) => {
    console.log('----- controller!');
    dependencyInjectionService.execute();

    return res.json({})
  }
});
