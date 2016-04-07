// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-species

// Overwriting Array[Symbol.species] updates the protector

let x = [];

assertEquals(Array, x.map(()=>{}).constructor);
assertEquals(Array, x.filter(()=>{}).constructor);
assertEquals(Array, x.slice().constructor);
assertEquals(Array, x.splice().constructor);
assertEquals(Array, x.concat([1]).constructor);
assertEquals(1, x.concat([1])[0]);

class MyArray extends Array { }

Object.defineProperty(Array, Symbol.species, {value: MyArray});

assertEquals(MyArray, x.map(()=>{}).constructor);
assertEquals(MyArray, x.filter(()=>{}).constructor);
assertEquals(MyArray, x.slice().constructor);
assertEquals(MyArray, x.splice().constructor);
assertEquals(MyArray, x.concat([1]).constructor);
assertEquals(1, x.concat([1])[0]);
