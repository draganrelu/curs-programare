# Comentarii

Comentariile sunt **ignorate de compilator** si pot fi introduse pentru a oferi explicatii aditionale in program.

## Comentarii pe o singura linie

Sunt precedate de '//' si se termina odata cu sfarsitul liniei de cod:

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!" << endl; // acesta este un comentariu care va fi ignorat de catre compilator

    // comentariul poate fi plasat oriunde in program, si orice urmeaza dupa '//' este ignorat de catre compilator

    // putem avea comentarii si pe mai multe linii, dar fiecare linie
    // trebuie precedata
    // de caracterele '//'
    return 0;
}
```

## Comentariile pe mai multe linii

Acestea sunt delimitate de `/*` si `*/`, astfel:

```C++
#include <iostream>

using namespace std;

/* Acesta este un comentariu
   pe mai multe
   linii */
int main() {
    /* astfel de comentarii pot fi introduse si pe o singura linie */
    cout << "Hello world!" << endl << "Hello again!" << endl;

    cout << /* pot fi introduse chiar si printre instructiuni, desi in practica se evita acest lucru */ "Something looks fishy!" << endl;

    return 0;
}
```

```
Hello world!
Hello again!
Something looks fishy!
```

Dupa cum am mentionat, comentariile sunt ignorate de compilator, deci programul de mai sus, din punctul de vedere al compilatorului, este echivalent cu programul de mai jos:

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!" << endl << "Hello again!" << endl;

    cout << "Something looks fishy!" << endl;

    return 0;
}
```

## Un exemplu practic

```C++
/* Includem biblioteca standard iostream pentru a folosi instructiunile
   cout si endl */
#include <iostream>

// evitam sa specificam std:: pentru instructiunile incluse din biblioteca iostream
using namespace std;

// functia main este locul din care incepe executia programului
int main() {

    // afisam un mesaj la consola
    cout << "Comentariile sunt folositoare daca dorim sa facem programul mai usor de inteles!";

    // afisam la consola terminatorul de linie, pentru a continua afisarea pe urmatoarea linie
    cout << endl;

    // Afisam inca un mesaj, pe mai multe linii.
    // Observati introducerea caracterului '\n' in interiorul sirului lung de caractere pentru a-l afisa pe mai multe linii
    cout << "Comentariile sunt optionale si in practica nu se pun asa de des.\nSe pun doar in cazul in care codul este prea greu de inteles\nsi este suficient sa citim comentariul pentru a intelege ce face codul.\n";

    // iesim din programul nostru cu exit code 0 = SUCCES
    return 0;
}
```

```
Comentariile sunt folositoare daca dorim sa facem programul mai usor de inteles!
Comentariile sunt optionale si in practica nu se pun asa de des.
Se pun doar in cazul in care codul este prea greu de inteles
si este suficient sa citim comentariul pentru a intelege ce face codul.
```
