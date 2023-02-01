mod lib;

#[derive(Debug)]
struct User {
    active: bool,
    username: String
}


fn main() {

    let tolga =User{
        active: true,
        username: String::from("Tolga")
    };
    println!("{:?}", tolga);
    lib::main_process::tolga();
    println!("Hello, world!");
}
