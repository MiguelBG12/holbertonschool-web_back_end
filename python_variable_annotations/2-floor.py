#!/usr/bin/env python3
"""Type-annotated function basic annotations"""
from math import floor as math_floor


def floor(n: float) -> int:
    "Function floor return int"
    return math_floor(n)
