# Date: Constante si Variabile

Pentru a produce rezultatul dorit de catre utilizator, programele opereaza cu date. Datele pot fi mai de mai multe tipuri:

- intregi: `5`, `-7`, `123`
- zecimale: `12.54`, `-1.2`
- caractere: `'H'`, `'C'`, `'a'`
- siruri de caractere / text: `"Hello world!"`, `"How you doing?"`

Cele de mai sus sunt date constante, deoarece ele nu se modifica pe parcursul programului. Cu alte cuvinte, putem spune ca aceste date sunt cunoscute in momentul compilarii programului. Le putem afisa astfel:

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

Programele pot lucra si cu date care se modifica pe parcursul executiei programului. De exemplu, aplicatia Calculator din Windows primeste ca date de intrare o expresie matematica, insa acea expresie matematica poate fi modificata si recalculata de fiecare data cand utilizatorul doreste. Astfel, programele au nevoie de "variabile" pentru a opera cu astfel de date.

Pornind de la programul de mai jos care afiseaza niste numere intregi:

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Afisare de numere intregi:" << endl;
    cout << 5 << endl;
    cout << -7 << endl;
    cout << 123 << endl;

    return 0;
}
```

```
Afisare de numere intregi:
5
-7
123
```

Il putem modifica folosind o variabila de tip intreg, astfel:

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Afisare de numere intregi:" << endl;

    int numar; // declarare variabila de tip 'int' (intreg), cu numele 'numar'

    numar = 5; // folosim operatorul atribuire ('=') pentru a asigna variabilei 'numar' valoarea intreaga '5'
    cout << numar << endl; // se va afisa 5 la consola

    numar = -7; // folosim operatorul atribuire ('=') pentru a asigna variabilei 'numar' valoarea intreaga '-7'
    cout << numar << endl; // se va afisa -7 la consola

    numar = 123; // folosim operatorul atribuire ('=') pentru a asigna variabilei 'numar' valoarea intreaga '123'
    cout << numar << endl; // se va afisa 123 la consola

    return 0;
}
```

Observatii:

- variabila de tip intreg `numar` a fost refolosita pentru a stoca succesiv valorile intregi `5`, `-7`, `123`.
- `cout << numar` afisarea unei variabile va afisa de fapt ultima valoare stocata in variabila respectiva.

### Declararea sau definirea variabilelor

Pentru a opera cu variabile intr-un program, este necesara `declararea` / `definirea` acestora. De exemplu prin `int x;` ii spunem compilatorului ca vom folosi o variabila de tip intreg, cu nume `x`.

De exemplu, programul urmator nu va compila cu succes si va arunca o eroare, deoarece variabila 'x' nu este cunoscuta la linia 4:

```C++
1 #include <iostream>
2 using namespace std;
3 int main() {
4     x = 5;
5    cout << x << endl;
6 }
```

Putem declara variabile multiple pe aceeasi linie, si variabile de mai multe tipuri:

```C++
int numar1, numar2;
float numar3, numar4;
char ch1, ch2;
```

Codul de mai sus este echivalent cu:

```C++
int numar1;
int numar2;
float numar3;
float numar4;
char ch1;
char ch2;
```

> Atentie! Aceeasi variabila nu poate fi declarata de mai multe ori! Observati ce eroare produce urmatorul program la compilare:

```
int numar1;
int numar1;
```

### Initializarea variabilelor

Variabilele pot fi initializate cu o anumita valoare in momentul in care sunt declarate:

```C++
int contor = 0; // initializare variabila cu valoarea 0
cout << "Valoare: " << contor << endl;
```

```
Valoare: 0
```

Este echivalent cu a scrie:

```C++
int contor;
contor = 0;
cout << "Valoare: " << contor << endl;
```

Variabilele declarate dar neinitializate stocheaza in general o valoare aleatorie. De exemplu, daca rulati urmatorul program care afiseaza o variabila neinitializata:

```C++
int var1;
cout << "Variabila neinitializata: " << var1 << endl;
```

Va afisa o valoare aleatorie cuprinsa in intervalul `[–2147483648, 2147483647]`.

### Atribuirea

Variabilele pot fi setate cu o anumita valoare folosing operatorul de atribuire (`=`):

```C++
int x1, x2;
float y1, y2;
x1 = 23;
x2 = 44;
x1 = 55;
y1 = 2.3;
y2 = -3.2;

cout << x1 << " " << x2 << " " << y1 << " " << y2;
```

```
55 44 2.3 -3.2
```

Observati ca variabilei `x1` i-a fost atribuita valoarea `23` si apoi valoarea `55`. Variabilele retin doar ultima valoare atribuita.

Variabilelor le pot fi atribuite valori continute in alte variabile:

```C++
int x1, x2;
int y1, y2;

x1 = 33;
x2 = x1; // x2 primeste valoarea stocata in x1, care este 33

x1 = 44;
y1 = x1; // y1 primeste valoarea stocata in x1, care este 44
y2 = x2; // y2 primeste valoarea stocata in x2, care este 33

cout << x1 << x2 << y1 << y2;
```

```
44 33 44 33
```

## Exercitii

1. Ce va afisa urmatorul program:

```C++
1 #include <iostream>
2 using namespace std;
3 int main() {
4     int x1 = 25, x2 = 45, x3;
5     float y1, y2, y3;
6     y1 = x3;
7     y2 = 44.5;
8     y3 = x2;
9     y3 = -1.2;
10    x1 = 4;
11    cout << "x1= " << x1 << endl;
12    cout << "x2= " << x2 << endl;
13    cout << "x3= " << x3 << endl;
14    cout << "y1= " << y1 << endl;
15    cout << "y2= " << y2 << endl;
16    cout << "y3= " << y3 << endl;
17    return 0;
18 }
```

2. Modificati instructiunea de la linia 10 cu:

```
4 = x1;
```

Ce observati?
