import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: HttpClient) {
        
    }
    factura: any = {
        cifPrestator: '',
        numePrestator: ' S.R.L.',
        numarUnicPrestator: '',
        ibanPrestator: '',
        bancaPrestator: '',
        cifBeneficiar: '',
        numeBeneficiar: ' S.R.L.',
        numarUnicBeneficiar: '',
        ibanBeneficiar: '',
        bancaBeneficiar: '',
        produs: '',
        cantitate: 0,
        pretUnitar: 0,
        tva: 0,
    }
    banca = [
        {
            name: 'Alpha Bank Romania',
            cod: 'BUCU'
        }, {
            name: 'Banc post',
            cod: 'BPOS'
        }, {
            name: 'Banca comerciala a greciei',
            cod: 'BSEA'
        }, {
            name: 'Banca comerciala Carpatica',
            cod: 'CARP'
        }, {
            name: 'Banca comerciala Ion Tiriac',
            cod: 'CBIT'
        }, {
            name: 'Banca comerciala ROBANK',
            cod: 'BNRB'
        }, {
            name: 'Banca comerciala Romana',
            cod: 'RNCB'
        }, {
            name: 'Banca de credit si dezvoltare Romexterra',
            cod: 'CRDZ'
        }, {
            name: 'Banca de microfinantare MIRO',
            cod: 'MIRO'
        }, {
            name: 'Banca di Roma',
            cod: 'BROM'
        }, {
            name: 'Banca Italo-romena',
            cod: 'BITR'
        }, {
            name: "BANCA NATIONALA A GRECIEI",
            cod: "ETHN"
        }, {
            name: "BANCA NATIONALA A ROMANIEI",
            cod: "NBOR"
        }, {
            name: "BANCA ROMANA PENTRU RELANSARE LIBRA",
            cod: "BREL"
        }, {
            name: "BANCA ROMANEASCA",
            cod: "BRMA"
        }, {
            name: "BANCA TRANSILVANIA",
            cod: "BTRL"
        }, {
            name: "BANQUE FRANCO ROUMAINE",
            cod: "BFRO"
        }, {
            name: "BRD SOCIETE GENERALE",
            cod: "BRDE"
        }, {
            name: "CEC",
            cod: "CECE"
        }, {
            name: "CITIBANK",
            cod: "CITI"
        }, {
            name: "DAEWOO BANK",
            cod: "DARO"
        }, {
            name: "EGNATIA BANK",
            cod: "EGNA"
        }, {
            name: "EXIMBANK",
            cod: "EXIM"
        }, {
            name: "EUROM BANK",
            cod: "DAFB"
        }, {
            name: "FINANS BANK",
            cod: "FNNB"
        }, {
            name: "FRANKFURT BUKAREST BANK",
            cod: "FRBU"
        }, {
            name: "GARANTI BANK",
            cod: "UGBI"
        }, {
            name: "HVB BANK",
            cod: "BACX"
        }, {
            name: "ING BANK",
            cod: "INGB"
        }, {
            name: "MINDBANK",
            cod: "MIND"
        }, {
            name: "MINISTERUL FINANTELOR PUBLICE",
            cod: "TREZ"
        }, {
            name: "MISR",
            cod: "MIRB"
        }, {
            name: "NOVA BANK",
            cod: "BCUN"
        }, {
            name: "PIRAEUS BANK",
            cod: "PIRB"
        }, {
            name: "RAIFFEISEN BANK",
            cod: "RZBR"
        }, {
            name: "ROMANIAN INTERNATIONAL BANK",
            cod: "ROIN"
        }, {
            name: "SAN PAOLO IMI BANK",
            cod: "WBAN"
        }, {
            name: "UNICREDIT ROMANIA",
            cod: "UNCR"
        }, {
            name: "VOLKSBANK",
            cod: "VBBU"
        }
    ];
    changeIbanPrestator(newValue) {
        if (newValue.length >= 8) {
            let banca = this.banca.filter(b => b.cod.toLowerCase() === newValue.substring(4, 8).toLowerCase());
            if (banca.length) {
                this.factura.bancaPrestator = banca[0].name;
            }
        }
    }
    changeIbanBeneficiar(newValue) {
        if (newValue.length >= 8) {
            let banca = this.banca.filter(b => b.cod.toLowerCase() === newValue.substring(4, 8).toLowerCase());
            if (banca.length) {
                this.factura.bancaBeneficiar = banca[0].name;
            }
        }
    }
    changeCifPrestator(newValue) {
        if(newValue.length >= 3 && newValue.includes('RO')) {
            this.factura.tva = 19;
        }
    }
    get total() {
        const total = this.factura.pretUnitar * this.factura.cantitate;
        if(!this.factura.tva) {
            return total;
        }
        return ((this.factura.tva/100 + 1) * total).toFixed(2);
    }

    onSubmit(f) {
        console.log('submitted', f);
        this.http.post('/form', f.form.value).toPromise();
    }

}
