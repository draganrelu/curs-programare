# Date: Constante si Variabile

Pentru a produce rezultatul dorit de catre utilizator, programele opereaza cu date. Datele pot fi mai de mai multe tipuri:
- intregi: `5`, `-7`, `123`
- zecimale: `12.54`, `-1.2`
- caractere: `'H'`, `'C'`, `'a'` 
- siruri de caractere / text: `"Hello world!"`, `"How you doing?"`

Cele de mai sus sunt date constante, deoarece ele nu se modifica pe parcursul programului. Le putem afisa astfel:

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Afisare de numere intregi: ";
    // observati ca afisam cate un caracter spatiu (' ') printre numere pentru a le separa 
    cout << 5 << ' ' << -7 << ' ' << 123 << endl;
    cout << "Afisare de numere zecimale: ";
    // observati ca afisam cate un caracter spatiu (' ') printre numere pentru a le separa
    cout << 12.54 << ' ' << -1.2 << endl;
    cout << "Afisare de caractere: ";
    // observati ca afisam cate un caracter spatiu (' ') printre caractere pentru a le separa
    cout << 'H' << ' ' << 'C' << ' ' << 'a' << endl;
    cout << "Siruri de caractere: " << endl;
    cout << "Hello world!" << endl;
    cout << "How you doing?" << endl;

    return 0;
}
```
```
Afisare de numere intregi: 5 -7 123
Afisare de numere zecimale: 12.54 -1.2
Afisare de caractere: H C a
Siruri de caractere: 
Hello world!
How you doing?
```

> Atentie! Daca nu am pune caracterul spatiu (`' '`) printre elementele afisate, ele s-ar afisa ingramadite:

```C++
cout << "Afisare de numere intregi: ";
cout << 5 << -7 << 123 << endl;
cout << "Afisare de caractere: ";
cout << 'H' << 'C' << 'a' << endl;
```
```
Afisare de numere intregi: 5-7123
Afisare de caractere: HCa
```

## Variabile

