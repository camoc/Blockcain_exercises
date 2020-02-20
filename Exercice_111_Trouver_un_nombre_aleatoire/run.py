from random import randint


def input_value():
    try:
        value = int(input('Devinez un nombre entre 1 et 100: \n'))
    except ValueError:
        print('Wrong value!!')
        value = input_value()

    return value


if __name__ == "__main__":
    case = {'sup': 'supérieure', 'inf': 'inférieure', 'tp': 'très proche', 'p': 'proche'}
    nb = randint(1, 100)

    value = input_value()

    while value != nb:
        dif = abs(nb - value)
        if (dif >= 1 and  dif <= 10):
            if (dif <= 5):
                print('Trés proche(diff < 5)')
            else:
                print('Proche dff(6 à 10)')
        else:
            if (value > nb):
                print('Nbre saisi est superieur')
            else:
                print('Nbre saisi est inferieur')

        value = input_value()

    print('Nombre exact. ', value)
