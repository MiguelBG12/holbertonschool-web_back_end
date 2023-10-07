#!/usr/bin/env python3
"""List all documents in a collection"""

import pymongo


def list_all(mongo_collection):
    "List collection and return an empty list if no document in the collection"
    result = mongo_collection.find({})
    new_list = []
    for document in result:
        new_list.append(document)
    return new_list