import pandas as pd

def sighting_to_dict(sighting): 
    columns = pd.read_csv('./app/data/ufoData.csv', keep_default_na=False).columns.values.tolist()
    sighting_dict = {}

    for i in range(0, len(columns)):
        if isinstance(sighting[i], str):
            sighting_dict[columns[i]] = sighting[i].replace('&#44', ',')
        else:
            sighting_dict[columns[i]] = sighting[i]

    return sighting_dict