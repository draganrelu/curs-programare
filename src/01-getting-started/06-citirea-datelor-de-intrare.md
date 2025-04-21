# Citirea datelor de intrare

Pana acum am construit programe care afisau mesaje sau date la consola care erau cunoscute in momentul compilarii. Cu alte cuvinte, inainte sa rulam programul, am fi putut anticipa exact care va fi mesajul afisat.

Pornim de la programul urmator care afiseaza suma a doua numere intregi:

```C++
#include <iostream>

using namespace std;

int main() {
    int a, b; // declaram doua variabile de tip intreg 'a' si 'b'

    // atribuim niste valori variabilelor 'a' si 'b'
    a = 55;
    b = 66;

    int suma; // declaram o variabila noua de tip intreg

    /* atribuim variabilei 'suma', valoarea obtinuta prin
    adunarea valorilor stocate in variabilele 'a' si 'b' */
    suma = a + b;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```

```
Suma este: 121
```

Programul afiseaza suma valorilor stocate in cele doua variabile 'a' si 'b', adica 55 + 66, adica 121.

Insa, programul de mai sus nu este foarte 'util' deoarece el nu calculeaza suma _oricaror doua numere_. Ori de cate ori am rula programul de mai sus, el va afisa acelasi lucru, suma celor doua numere `55` ai `66`.

Daca vrem sa calculam suma altor doua numere, de exemplu `70` si `80`, ar trebui modificam instructiunile programului si sa atribuim variabilelor `a` si `b` noile valori, sa re-compilam si sa re-rulam programul.

Insa, putem realiza un program care calculeaza suma a oricaror doua numere, fara a fi nevoie sa modificam instructiunile sale. Cu alte cuvinte, un astfel de program poate primi ca _date de intrare_ doua valori intregi si va afisa la consola suma acestora.

Pentru a introduce date intr-un program putem folosi instructiunea `cin` (de la console input) din biblioteca `iostream`. Cu ajutorul acesteia putem `citi` de la consola cei doi termeni ai sumei astfel:

```C++
#include <iostream>

using namespace std;

int main() {
    int a, b;

    cout << "Introduceti valoarea lui a: ";
    cin >> a;
    cout << "Valoarea lui a este: " << a << endl;

    cout << "Introduceti valoarea lui b: ";
    cin >> b;
    cout << "Valoarea lui b este: " << b << endl;

    int suma;

    suma = a + b;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```

Dupa compilarea si rularea programului de mai sus:

- Instructiunea `cout << "Introduceti valoarea lui a: ";` este executata si observam ca la consola se afiseaza mesajul:

```
Introduceti valoarea lui a:
```

- Executia programului se blocheaza. Acest lucru se intampla multumita instructiunii `cin >> a`. Practic, programul asteapta acum de la noi sa introducem la consola un numar intreg.

- Putem introduce orice numar intreg, de exemplu introducem valoarea `23` la consola si apoi apasam `Enter`.

```
Introduceti valoarea lui a: 23
```

- Aceasta valoare este acum stocata in variabila `a`. Acest lucru este confirmat si de mesajul afisat la consola, in urma executiei instructiunii urmatoare, `cout << "Valoarea lui a este: " << a << endl;`:

```
Valoarea lui a este: 23
```

- Apoi, instructiunea `cout << "Introduceti valoarea lui b: ";` este executata si observam ca la consola se afiseaza mesajul:

```
Introduceti valoarea lui b:
```

- Si executia programului se blocheaza din nou. Programul acum asteapta de la noi sa citim inca un numar intreg (`cin >> b`), pe care il va stoca in variabila `b`. Putem introduce orice numar intreg, de exemplu introducem valoarea `57` la consola si apoi apasam `Enter`.

```
Introduceti valoarea lui b: 57
```

- Acest lucru este confirmat de urmatorul mesaj care este afisat la consola, in urma executiei instructiunii `cout << "Valoarea lui b este: " << b << endl;`:

```
Valoarea lui b este: 57
```

- Suma valorilor variabilelor `a` si `b` va fi apoi stocata in variabila nou declarata `suma` si apoi afisata:

```
Suma este: 80
```

- Executia programului se opreste. Toate mesajele de la consola in urma executiei programului:

```
Introduceti valoarea lui a: 23
Valoarea lui a este: 23
Introduceti valoarea lui b: 57
Valoarea lui b este: 57
Suma este: 80
```

Daca rulam iar acelasi program, dar introducem alte valori pentru variabilele `a` si `b`:

```
Introduceti valoarea lui a: 44
Valoarea lui a este: 44
Introduceti valoarea lui b: 55
Valoarea lui b este: 55
Suma este: 99
```

Putem introduce si valori mai mari, a caror suma nu este usor de calculat mental. Programul o va calcula pentru noi foarte rapid:

```
Introduceti valoarea lui a: 1253432
Valoarea lui a este: 1253432
Introduceti valoarea lui b: 66593
Valoarea lui b este: 66593
Suma este: 1320025
```

Mesajele "Introduceti valoarea lui ..." si "Valoarea lui ... este" sunt optionale, le putem elimina din program:

```C++
#include <iostream>

using namespace std;

int main() {
    int a, b;

    cin >> a;
    cin >> b;

    int suma;

    suma = a + b;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```

Dupa ce compilam si rulam programul de mai sus, observam ca nu se afiseaza niciun mesaj la consola, programul nostru asteptand ca noi sa introducem un numar intreg. Dupa ce introducem un numar intreg, apasam `Enter`, si apoi programul asteapta cel de-al doilea numar intreg. Introducem al doilea numar intreg si apasam iar `Enter`, dupa care se afiseaza suma celor doua numere.

```
405
555
Suma este: 960
```

Nu este necesar sa introducem numerele intregi pe linii separate, le putem introduce pe aceeasi linie, dar sa fie separate de unul sau mai multe spatii:

```
405 555
Suma este: 960
```

```
405     555
Suma este: 960
```

Instructiunea `cin` sare peste toate spatiile / liniile din consola pana gaseste urmatorul numar intreg, pe care il citeste. Putem verifica acest lucru daca rulam programul nostru si apasam `Enter` si `Space` ori de cate ori, introducem apoi un numar intreg si repetam procesul pentru cel de-al doilea intreg:

```

    444

          555
Suma este: 999
```

Putem modifica programul de mai sus sa poata lucra cu numere zecimale:

```C++
#include <iostream>

using namespace std;

int main() {
    float a, b;

    cin >> a;
    cin >> b;

    float suma;

    suma = a + b;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```

```
23.4 55.4
Suma este: 78.8
```

Sau daca vrem sa efectueze suma a 3 numere:

```C++
#include <iostream>

using namespace std;

int main() {
    float a, b, c;

    cin >> a;
    cin >> b;
    cin >> b;

    float suma;

    suma = a + b + c;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```

```
1.1
2.2
3.3
Suma este: 6.6
```

Instructiunea `cin` poate accepta mai multe variabile pentru citire pe aceeasi linie, astfel:

```C++
cin >> a >> b >> c;
```

Este echivalenta cu:

```C++
cin >> a;
cin >> b;
cin >> c;
```

Similar cu `cout`:

```C++
cout << "Suma este: " << suma << endl;
```

Care este echivalent cu a scrie:

```C++
cout << "Suma este: ";
cout << suma;
cout << endl;
```

# Exercitii

1. Compilati si rulati urmatorul program si observati ce afiseaza:

```C++
#include <iostream>
using namespace std;
int main() {
    int a;
    cin >> a;
    cin >> a;
    cout << "Numarul citit de doua ori este: " << a << endl;
    return 0;
}
```

> Explicatie: putem citi de mai multe ori aceeasi variabila; dar cand o afisam, doar ultima valoare stocata in aceasta va fi afisata.

2. Realizati un program care afiseaza suma a 4 numere intregi, citite de la consola.

3. Compilati, rulati si explicati ce face urmatorul program:

```C++
#include <iostream>
using namespace std;
int main() {
    int nr1;
    cout << "Introduceti primul numar: ";
    cin >> nr1;

    int nr2;
    cout << "Introduceti al doilea numar: ";
    cin >> nr2;

    int suma;
    suma = nr1 + nr2;
    cout << "Suma primelor doua numere este: " << suma << endl;

    int nr3;
    cout << "Introduceti al treilea numar: ";
    cin >> nr3;

    suma = nr1 + nr2 + nr3;
    cout << "Suma celor trei numere este: " << suma << endl;

    return 0;
}
```

4. Reparati urmatorul program astfel incat acesta sa efectueze suma a 2 numere:

```C++
#include <iostream>
using namespace std;
int main() {
    int nr1, nr2;

    cin >> nr1;

    int suma;
    suma = nr1 + nr2;

    cout << "Suma este: " << suma << endl;

    return 0;
}
```
