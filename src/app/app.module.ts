import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { MetarialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { UbicacionGarantiaComponent } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasSIBComponent, DailogAgregarCategoriaSIB} from './components/categorias-sib/categorias-sib.component';
import { AgrupacionCreditosComponent } from './components/agrupacion-creditos/agrupacion-creditos.component';
import { AcercamientosComponent } from './components/acercamientos/acercamientos.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { ArchivosLimpiezaComponent } from './components/archivos-limpieza/archivos-limpieza.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AsesoresPrestamoComponent } from './components/asesores-prestamo/asesores-prestamo.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { CanalesVentaComponent } from './components/canales-venta/canales-venta.component';
import { CobrosAdicionalesComponent } from './components/cobros-adicionales/cobros-adicionales.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { DiasInhabilesComponent } from './components/dias-inhabiles/dias-inhabiles.component';
import { EstatusAvaluosComponent, DailogAgregarEstatusAvaluos } from './components/estatus-avaluos/estatus-avaluos.component';
import { EstatusGarantiaRealComponent,DailogAgregarEstatusGarantiaReal } from './components/estatus-garantia-real/estatus-garantia-real.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { FormasPagoComponent } from './components/formas-pago/formas-pago.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { IngenierosValuadoresComponent, DailogAgregarIngenierosValuadores } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { MotivosAjustesComponent } from './components/motivos-ajustes/motivos-ajustes.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MotivosReservasComponent } from './components/motivos-reservas/motivos-reservas.component';
import { NotariosComponent } from './components/notarios/notarios.component';
import { ParametrizacionNumeroPrestamoComponent } from './components/parametrizacion-numero-prestamo/parametrizacion-numero-prestamo.component';
import { PasosCierreComponent } from './components/pasos-cierre/pasos-cierre.component';
import { ReslacionTransaccionDepositosComponent } from './components/relacion-transaccion-depositos/relacion-transaccion-depositos.component';
import { TiposCanalesDistribucionComponent } from './components/tipos-canales-distribucion/tipos-canales-distribucion.component';
import { TiposDeduccionesComponent } from './components/tipos-deducciones/tipos-deducciones.component';
import { TiposPrestamosComponent } from './components/tipos-prestamos/tipos-prestamos.component';
import { TiposTransaccionesComponent } from './components/tipos-transacciones/tipos-transacciones.component';
import { OrigenFondosComponent } from './components/origen-fondos/origen-fondos.component';
import { MediosContactoComponent } from './components/medios-contacto/medios-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlmacenadoraComponent,
    AseguradorasComponent,
    AgrupacionCreditosComponent,
    LugaresInversionComponent,
    UbicacionGarantiaComponent,
    OrigenFondosComponent,
    FormasPagoComponent,
    DestinosComponent,
    CategoriasSIBComponent,
    EstatusGarantiaRealComponent,
    EstatusAvaluosComponent,
    IngenierosValuadoresComponent,
    NotariosComponent,
    MotivosAjustesComponent,
    DiasInhabilesComponent,
    CobrosAdicionalesComponent,
    InstitucionesCobrosAdicionalesComponent,
    MotivosReservasComponent,
    FormasDesembolsoComponent,
    MotivosReferenciasClientesComponent,
    ReslacionTransaccionDepositosComponent,
    MediosContactoComponent,
    CanalesVentaComponent,
    TiposCanalesDistribucionComponent,
    AcercamientosComponent,
    AsesoresPrestamoComponent,
    BancosComponent,
    TiposDeduccionesComponent,
    TiposPrestamosComponent,
    ArchivosLimpiezaComponent,
    FrecuenciasAmortizacionComponent,
    GarantiasContablesComponent,    
    ParametrizacionNumeroPrestamoComponent,
    PasosCierreComponent,
    TiposTransaccionesComponent,
    DailogAgregarEstatusGarantiaReal,
    DailogAgregarCategoriaSIB,
    DailogAgregarEstatusAvaluos,
    DailogAgregarIngenierosValuadores
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetarialModule,
    AppRoutingModule
  ],
  entryComponents: [
    DailogAgregarEstatusGarantiaReal,
    DailogAgregarCategoriaSIB,
    DailogAgregarEstatusAvaluos,
    DailogAgregarIngenierosValuadores
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
