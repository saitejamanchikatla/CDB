import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/modules/Products/services/course.service';
import { MatDialog } from '@angular/material';
import { ProductComponent } from 'src/app/modules/Products/components/product/product.component';
import { ShoppingCartService } from 'src/app/modules/shoppingcart/services/shopping-cart.service';
import { LoginService } from 'src/app/modules/authen/services/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  
  address:any[];
  user;
  userId:string;
  displayedColumns: string[] = ['userId','name','city','pin','near','phone','dateCreated'];

  constructor(private loginService:LoginService,private cartService:ShoppingCartService,
    private afAuth:AngularFireAuth) {this.afAuth.authState.subscribe(user=>{
      if(user) this.userId = user.uid;
    }) }

  ngOnInit() {
    this.cartService.getAllAddress()
                    .subscribe(address=>this.address=address);
      
    }
    }


