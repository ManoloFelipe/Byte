import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { MetarialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { UbicacionGarantiaComponent, DialogOverviewExampleDialog } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasSIBComponent, DailogAgregarCategoriaSIB} from './components/categorias-sib/categorias-sib.component';
import { AgrupacionCreditosComponent } from './components/agrupacion-creditos/agrupacion-creditos.component';
import { AcercamientosComponent, CrearAcercamiento } from './components/acercamientos/acercamientos.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { ArchivosLimpiezaComponent } from './components/archivos-limpieza/archivos-limpieza.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AsesoresPrestamoComponent,CrearAsesoresPrestamos } from './components/asesores-prestamo/asesores-prestamo.component';
import { BancosComponent } from './components/bancos/bancos.component';
import { CanalesVentaComponent,DialogCanal } from './components/canales-venta/canales-venta.component';
import { CobrosAdicionalesComponent, DialogCobroAdicional} from './components/cobros-adicionales/cobros-adicionales.component';
import { DestinosComponent, DialogDestinos } from './components/destinos/destinos.component';
import { DiasInhabilesComponent, DialogDiaInhabil} from './components/dias-inhabiles/dias-inhabiles.component';
import { EstatusAvaluosComponent, DailogAgregarEstatusAvaluos } from './components/estatus-avaluos/estatus-avaluos.component';
import { EstatusGarantiaRealComponent,DailogAgregarEstatusGarantiaReal } from './components/estatus-garantia-real/estatus-garantia-real.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { FormasPagoComponent, DialogFormas } from './components/formas-pago/formas-pago.component';
import { FrecuenciasAmortizacionComponent } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { GarantiasContablesComponent } from './components/garantias-contables/garantias-contables.component';
import { IngenierosValuadoresComponent, DailogAgregarIngenierosValuadores } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { MotivosAjustesComponent, DialogMotivoAjuste } from './components/motivos-ajustes/motivos-ajustes.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MotivosReservasComponent } from './components/motivos-reservas/motivos-reservas.component';
import { NotariosComponent, DialogNotario } from './components/notarios/notarios.component';
import { ParametrizacionNumeroPrestamoComponent } from './components/parametrizacion-numero-prestamo/parametrizacion-numero-prestamo.component';
import { PasosCierreComponent } from './components/pasos-cierre/pasos-cierre.component';
import { RelacionTransaccionDepositosComponent, DialogRelacion } from './components/relacion-transaccion-depositos/relacion-transaccion-depositos.component';
import { TiposCanalesDistribucionComponent, DialogTiposC } from './components/tipos-canales-distribucion/tipos-canales-distribucion.component';
import { TiposDeduccionesComponent, CrearTiposDeducciones } from './components/tipos-deducciones/tipos-deducciones.component';
import { TiposPrestamosComponent } from './components/tipos-prestamos/tipos-prestamos.component';
import { TiposTransaccionesComponent } from './components/tipos-transacciones/tipos-transacciones.component';
import { OrigenFondosComponent, DialogOrigen } from './components/origen-fondos/origen-fondos.component';
import { MediosContactoComponent, DialogContacto } from './components/medios-contacto/medios-contacto.component';
import { MontosPlazoComponent, DailogAgregarMontosPlazo, DailogEditarMontosPlazo } from './components/montos-plazo/montos-plazo.component';


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
    RelacionTransaccionDepositosComponent,
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
    MontosPlazoComponent,
    DailogAgregarEstatusGarantiaReal,
    DailogAgregarCategoriaSIB,
    DailogAgregarEstatusAvaluos,
    DailogAgregarIngenierosValuadores,
    DialogOverviewExampleDialog,
    CrearAcercamiento,
    CrearAsesoresPrestamos,
    DialogCanal,
    DialogCobroAdicional,
    DialogDestinos,
    DialogDiaInhabil,
    DialogFormas,
    DialogMotivoAjuste,
    DialogNotario,
    DialogRelacion,
    DialogTiposC,
    CrearTiposDeducciones,
    DialogOrigen,
    DialogContacto,
    DailogAgregarMontosPlazo,
    DailogEditarMontosPlazo
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
    DailogAgregarIngenierosValuadores,
    DialogOverviewExampleDialog,
    CrearAcercamiento,
    CrearAsesoresPrestamos,
    DialogCanal,
    DialogCobroAdicional,
    DialogDestinos,
    DialogDiaInhabil,
    DialogFormas,
    DialogMotivoAjuste,
    DialogNotario,
    DialogRelacion,
    DialogTiposC,
    CrearTiposDeducciones,
    DialogOrigen,
    DialogContacto,
    DailogAgregarMontosPlazo,
    DailogEditarMontosPlazo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
