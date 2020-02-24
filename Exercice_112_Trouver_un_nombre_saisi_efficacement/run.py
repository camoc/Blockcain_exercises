from random import randint


def input_value():
    try:
        value = int(input('Donner  un nombre entre 1 et 100: \n'))
        if value < 1 or value > 100:
            raise ValueError()
    except ValueError:
        print('Wrong value!!')
        value = input_value()

    return value


def find_value(n, value):
    _start = 1
    _end = 100
    print('n=', n)
    if value >= _end/2:
        _start = _end/2
    else:
        _end = _end/2

    alea = randint(_start, _end)
    print('Ma proposition est :', alea)
    if alea != value:
        if n >= 0:
            n = n-1
            find_value(n, value)
        else:
            print('Valeur non trouvée')



if __name__ == '__main__':
    value = input_value()
    max= 50
    find_value(max , value)