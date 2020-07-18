use wasm_bindgen::prelude::*;
use std::convert::TryFrom;
use lipsum::{lipsum as lipsum_implementation, lipsum_title as lipsum_title_implementation};

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  println!("The Rust function say() received {}", s);
  let r = String::from("hello ");
  return r + s;
}

#[wasm_bindgen]
pub fn lipsum(i: i32) -> String {
  let num_words = match usize::try_from(i) {
    Ok(x) => x,
    _ => 0,
  };
  return lipsum_implementation(num_words);
}

#[wasm_bindgen]
pub fn lipsum_title() -> String {
  return lipsum_title_implementation();
}
