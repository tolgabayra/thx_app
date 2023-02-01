use std::thread;
use std::time::Duration;

pub mod thread_process{
    use std::thread;
    use std::time::Duration;

   pub fn main() {


        thread::spawn(||{
            for i in 0..100  {
                println!("Loop1: {}", i);
                thread::sleep(Duration::from_millis(500));
            }
        });

        for i in 0..100 {
            println!("Loop2: {}", i);
            thread::sleep(Duration::from_millis(500))
        }
    }
}