# Primul tau program: Hello world!

```C++
#include <iostream>

using namespace std;

int main() {
    cout << "Hello world!" << endl;
    return 0;
}
```

Programul de mai sus, in urma rularii, afiseaza la consola urmatorul mesaj:

```
Hello world!
```

Observam ca acest program este compus din mai multe instructiuni. Le vom explica pe fiecare pe rand:

### Instructiunea include

```C++
#include <iostream>
```

Cu ajutorul acesteia, includem in programul nostru biblioteca "iostream". O biblioteca este o colectie de cod deja existenta si implementata, pe care o putem folosi in programul nostru. 

Mai precis, biblioteca "iostream" contine instructiuni care ne ajuta in citirea si afisarea datelor la consola, de exemplu instructiunile `cin` si `cout`.

Un alt exemplu de biblioteca este biblioteca "fstream" care contine instructiuni si metode pentru a citi / afisa date in fisiere text. 

Putem include mai multe biblioteci in programul nostru astfel:

```C++
#include <iostream>
#include <fstream>
```

In toate programele noastre vom folosi fie biblioteca **iostream** fie biblioteca **fstream**, fie ambele, pentru a face programul nostru sa interactioneze cu date de intrare / iesire. 

### Instructiunea using namespace

```C++
using namespace std;
```

Daca **nu** am pune aceasta instructiune, atunci programul nostru ar da urmatoarea eroare in urma compilarii:

```
TODO
```

Programul nostru nu recunoaste instructiunile "cout" si "endl". Desi acestea apartin de bilbioteca "iostream" pe care am inclus-o, ele fac parte si din namespace-ul "std". Un namespace pentru instructiuni este ca un director pentru fisiere. Imaginati-va ca daca vreti sa creati doua fisiere cu acelasi nume in sistemul de operare, le puteti plasa in directoare cu nume diferite pentru a evita conflictul de nume. La fel, daca aveti doua instructiuni cu acelasi nume dar care fac lucruri diferite, le puteti plasa in namespace-uri diferite. 

Fara aceasta instructiune, programul nostru ar compila cu succes daca l-am scrie astfel:

```C++
#include <iostream>

int main() {
    std::cout << "Hello world!" << std::endl;
    return 0;
}
```

Observati ca am folosit:
- `std::cout` in loc de `cout`
- `std::endl` in loc de `endl`

In concluzie, `using namespace std` ii spune programului nostru sa includa toate instructiunile din namespace-ul `std`, fara a mai fi nevoie sa le specificam noi pe fiecare cu `std::`.

> ❗ Atentie! Dupa fiecare instructiune trebuie sa punem punct si virgula (;). Punctul si virgula marcheaza sfarsitul unei instructiuni si inceputul urmatoarei instructiuni. Observati ce eroare va da programul vostru daca stergeti punctul si virgula de dupa `using namespace std;`.

### 





