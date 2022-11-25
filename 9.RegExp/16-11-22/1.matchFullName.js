function fullName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let names = text.match(pattern);
    console.log(names.join(' '));
}
fullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")