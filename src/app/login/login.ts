import { ChangeDetectionStrategy,Component ,signal} from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormControl, Validators} from '@angular/forms';
import { trigger, transition, style, animate  } from '@angular/animations';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatSlideToggleModule,MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
    readonly email = new FormControl('', [Validators.required, Validators.email]);

}
