import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { MetarialModule } from './material.module'
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { UbicacionGarantiaComponent, DialogOverviewExampleDialog } from './components/ubicacion-garantia/ubicacion-garantia.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasSIBComponent, DailogAgregarCategoriaSIB,DailogEliminarCategoriaSIB,DailogEditarCategoriaSIB,} from './components/categorias-sib/categorias-sib.component';
import { AgrupacionCreditosComponent } from './components/agrupacion-creditos/agrupacion-creditos.component';
import { AcercamientosComponent, CrearAcercamiento, EditarAcercamientos, EliminarAcercamientos } from './components/acercamientos/acercamientos.component';
import { AlmacenadoraComponent } from './components/almacenadora/almacenadora.component';
import { ArchivosLimpiezaComponent, DialogLimpieza } from './components/archivos-limpieza/archivos-limpieza.component';
import { AseguradorasComponent } from './components/aseguradoras/aseguradoras.component';
import { AsesoresPrestamoComponent,CrearAsesoresPrestamos } from './components/asesores-prestamo/asesores-prestamo.component';
import { BancosComponent, CrearBancos } from './components/bancos/bancos.component';
import { CanalesVentaComponent,DialogCanal } from './components/canales-venta/canales-venta.component';
import { CobrosAdicionalesComponent, DialogCobroAdicional} from './components/cobros-adicionales/cobros-adicionales.component';
import { DestinosComponent, DialogDestinos } from './components/destinos/destinos.component';
import { DiasInhabilesComponent, DialogDiaInhabil} from './components/dias-inhabiles/dias-inhabiles.component';
import { EstatusAvaluosComponent, DailogAgregarEstatusAvaluos,DailogEditarEstatusAvaluos, DailogEliminarEstatusAvaluos } from './components/estatus-avaluos/estatus-avaluos.component';
import { EstatusGarantiaRealComponent,DailogAgregarEstatusGarantiaReal, DailogEditarEstatusGarantiaReal, DailogEliminarEstatusGarantiaReal, } from './components/estatus-garantia-real/estatus-garantia-real.component';
import { FormasDesembolsoComponent } from './components/formas-desembolso/formas-desembolso.component';
import { FormasPagoComponent, DialogFormas } from './components/formas-pago/formas-pago.component';
import { FrecuenciasAmortizacionComponent, DialogFrecuenciaAmortizacionAgregar } from './components/frecuencias-amortizacion/frecuencias-amortizacion.component';
import { GarantiasContablesComponent, DialogGa } from './components/garantias-contables/garantias-contables.component';
import { IngenierosValuadoresComponent, DailogAgregarIngenierosValuadores, DailogEditarIngenierosValuadores, DailogEliminarIngenierosValuadores } from './components/ingenieros-valuadores/ingenieros-valuadores.component';
import { InstitucionesCobrosAdicionalesComponent } from './components/instituciones-cobros-adicionales/instituciones-cobros-adicionales.component';
import { LugaresInversionComponent } from './components/lugares-inversion/lugares-inversion.component';
import { MotivosAjustesComponent, DialogMotivoAjuste } from './components/motivos-ajustes/motivos-ajustes.component';
import { MotivosReferenciasClientesComponent } from './components/motivos-referencias-clientes/motivos-referencias-clientes.component';
import { MotivosReservasComponent } from './components/motivos-reservas/motivos-reservas.component';
import { NotariosComponent, DialogNotario } from './components/notarios/notarios.component';
import { ParametrizacionNumeroPrestamoComponent, DialogParaPrestamoAgregar } from './components/parametrizacion-numero-prestamo/parametrizacion-numero-prestamo.component';
import { PasosCierreComponent, DialogEventoPasos } from './components/pasos-cierre/pasos-cierre.component';
import { RelacionTransaccionDepositosComponent, DialogRelacion } from './components/relacion-transaccion-depositos/relacion-transaccion-depositos.component';
import { TiposCanalesDistribucionComponent, DialogTiposC } from './components/tipos-canales-distribucion/tipos-canales-distribucion.component';
import { TiposDeduccionesComponent, CrearTiposDeducciones } from './components/tipos-deducciones/tipos-deducciones.component';
import { TiposPrestamosComponent, DialogTp } from './components/tipos-prestamos/tipos-prestamos.component';
import { TiposTransaccionesComponent, DialogTr } from './components/tipos-transacciones/tipos-transacciones.component';
import { OrigenFondosComponent, DialogOrigen } from './components/origen-fondos/origen-fondos.component';
import { MediosContactoComponent, DialogContacto } from './components/medios-contacto/medios-contacto.component';
import { MontosPlazoComponent, DailogAgregarMontosPlazo, DailogEditarMontosPlazo,DailogEliminarMontosPlazo } from './components/montos-plazo/montos-plazo.component';
import { DefinirCategoriaUsuarioComponent,DailogAgregarCategoriaUsuario,DailogEliminarCategoriaUsuario,DailogEditarCategoriaUsuario } from './components/definir-categoria-usuario/definir-categoria-usuario.component';
import { LimpiezaArchivosComponent, DialogArchivos } from './components/limpieza-archivos/limpieza-archivos.component';
import { DatosGeneralesRegistroControlComponent } from './components/datos-generales-registro-control/datos-generales-registro-control.component';
import { TiposSubtiposGarantiasRealesComponent, DialogTiposSubtiposAgregar, DialogTiposSubtiposAgregarCheck, TiposSubtiposGarantiasCheckAgregar } from './components/tipos-subtipos-garantias-reales/tipos-subtipos-garantias-reales.component';
import { EstadosPrestamosComponent } from './components/estados-prestamos/estados-prestamos.component';
import { ConsultasComponent, DialogConsultas } from './components/consultas/consultas.component';
import { ProductosComponent, CrearProducto, EditarProducto, EliminarProducto } from './components/productos/productos.component';
import { ClasificacionComponent, DialogClasificacion } from './components/clasificacion/clasificacion.component';
import { ParametrosAdicionalesProductosComponent } from './components/parametros-adicionales-producto/parametros-adicionales-productos.component';
import { EventosSolicitudesComponent, DialogEvento } from './components/eventos-solicitudes/eventos-solicitudes.component';
import { DocumentosProductoComponent } from './components/documentos-producto/documentos-producto.component';
import { PorcentajeFinanciamientoComponent } from './components/porcentaje-financiamiento/porcentaje-financiamiento.component';
import { RangoPlazoInteresComponent } from './components/rango-plazo-interes/rango-plazo-interes.component';
import { AsignacionCategoriaComponent } from './components/asignacion-categoria/asignacion-categoria.component';
import { CopiarParametrosProductosComponent } from './components/Copiar-Parametros-de-Productos/Copiar-parametros-de-Productos.component';
import { Estatuslegalescomponent, dialogEstatusLegales } from './components/estatus-legales/estatus-legales.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material';
import { DialogDocumentoProducto } from './components/documentos-producto/documentos-producto.component';
import { DialogAsignacionCategorias, DialogAsignacionCategoriasT } from './components/Asignacion-de-Categorias/Asignacion-de-Categorias.component';
import { dialogCopiarParametros } from './components/Copiar-Parametros-de-Productos/Copiar-parametros-de-Productos.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

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
    DatosGeneralesRegistroControlComponent,
    TiposSubtiposGarantiasRealesComponent,
    EstadosPrestamosComponent,
    LimpiezaArchivosComponent,
    ConsultasComponent,
    ProductosComponent,
    ClasificacionComponent,
    ParametrosAdicionalesProductosComponent,
    EventosSolicitudesComponent,
    DocumentosProductoComponent,
    PorcentajeFinanciamientoComponent,
    RangoPlazoInteresComponent,
    DefinirCategoriaUsuarioComponent,
    AsignacionCategoriaComponent,
    CopiarParametrosProductosComponent,
    Estatuslegalescomponent,
    DailogAgregarCategoriaSIB,
    DailogEliminarCategoriaSIB,
    DailogEditarCategoriaSIB,
    DailogAgregarEstatusGarantiaReal,
    DailogEditarEstatusGarantiaReal,
    DailogEliminarEstatusGarantiaReal,
    DailogAgregarEstatusAvaluos,
    DailogEditarEstatusAvaluos,
    DailogEliminarEstatusAvaluos,
    DailogAgregarIngenierosValuadores,
    DailogEditarIngenierosValuadores,
    DailogEliminarIngenierosValuadores,
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
    DailogAgregarMontosPlazo,//-------
    DailogEditarMontosPlazo,//--------
    DailogEliminarMontosPlazo,//------
    DailogAgregarCategoriaUsuario,
    DailogEliminarCategoriaUsuario,
    DailogEditarCategoriaUsuario,
    DialogTp,
    DialogTr,
    DialogGa,
    DialogTiposSubtiposAgregar,
    DialogTiposSubtiposAgregarCheck,
    TiposSubtiposGarantiasCheckAgregar,
    DialogFrecuenciaAmortizacionAgregar,
    DialogParaPrestamoAgregar,
    DialogEventoPasos,
    DialogLimpieza,
    DialogArchivos,
    CrearProducto,
    DialogConsultas,
    DialogClasificacion,
    DialogEvento,
    DialogDocumentoProducto,
    DialogAsignacionCategorias,
    DialogAsignacionCategoriasT,
    dialogCopiarParametros,
    dialogEstatusLegales,
    CrearBancos,
    SidenavComponent,
    EditarAcercamientos,
    EliminarAcercamientos,
    EditarProducto,
    EliminarProducto
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetarialModule,
    AppRoutingModule,
    FormsModule,
    MatRippleModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [    
    DailogAgregarCategoriaSIB,
    DailogEditarCategoriaSIB,  
    DailogEliminarCategoriaSIB,
    DailogAgregarEstatusGarantiaReal,
    DailogEditarEstatusGarantiaReal,
    DailogEliminarEstatusGarantiaReal,
    DailogAgregarEstatusAvaluos,
    DailogEditarEstatusAvaluos,
    DailogEliminarEstatusAvaluos,
    DailogAgregarIngenierosValuadores,
    DailogEditarIngenierosValuadores,
    DailogEliminarIngenierosValuadores,
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
    DailogAgregarMontosPlazo,//-----------------
    DailogEditarMontosPlazo,//------------------
    DailogEliminarMontosPlazo,//----------------
    DailogAgregarCategoriaUsuario,
    DailogEliminarCategoriaUsuario,
    DailogEditarCategoriaUsuario,
    DialogTp,
    DialogTr,
    DialogGa,
    DialogTiposSubtiposAgregar,
    DialogTiposSubtiposAgregarCheck,
    TiposSubtiposGarantiasCheckAgregar,
    DialogFrecuenciaAmortizacionAgregar,
    DialogParaPrestamoAgregar,
    DialogEventoPasos,
    DialogLimpieza,
    DialogArchivos,
    CrearProducto,
    DialogConsultas,
    DialogClasificacion,
    DialogEvento,
    DialogDocumentoProducto,
    DialogAsignacionCategorias,
    DialogAsignacionCategorias,
    DialogAsignacionCategoriasT,
    dialogCopiarParametros,
    dialogEstatusLegales,
    CrearBancos,
    EditarAcercamientos,
    EliminarAcercamientos,
    HomeComponent,
    EditarProducto,
    EliminarProducto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
