#!/usr/bin/env python3
""" Async function task_wait_n creates a list of
    completion times for concurrent tasks with a max delay.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns list"""
    tasks = []
    result_list = []
    for i in range(n):
        tasks.append(task_wait_random(max_delay))

    result_list = [await task for task in asyncio.as_completed(tasks)]
    return result_list
