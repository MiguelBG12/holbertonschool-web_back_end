#!/usr/bin/env python3
"""
Function takes a floating point number as input, calculates and returns the
integer part as an integer
"""
from math import floor as math_floor


def floor(n: float) -> int:
    "Function floor return int"
    return math_floor(n)
