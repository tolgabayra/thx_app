use csv::Error;

pub fn tolga(){
        println!("MAIN PROCESS");
    }

pub fn main() -> Result<(), Error> {
    let csv = "year,make,model,description
        1948,Porsche,356,Luxury sports car
        1967,Ford,Mustang fastback 1967,American car";

    let mut reader = csv::Reader::from_reader(csv.as_bytes());
    for record in reader.records() {
        let record = record?;
        println!(
            "{}, {},{},{}",
            &record[0],
            &record[1],
            &record[2],
            &record[3]
        )
    }
    Ok(())
}


