#!/usr/bin/env python3
import asyncio
from random import uniform
from typing import Generator

"""
Module defines an asynchronous generator function called 'async_generator'.

This function generates random float numbers between 0 and 10 with
a 1-second delay between each generation.

"""


async def async_generator() -> Generator[float, None, None]:
    """
    Generate random float numbers asynchronously.

    Yields:
        float: A random float number between 0 and 10.
    """
    for _ in range(10):
        yield uniform(0, 10)
        await asyncio.sleep(1)
