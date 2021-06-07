import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  public add:FormGroup;
  posts: Post[]=[];
  constructor(public formbuilder: FormBuilder,  private nav:NavController, public postService: PostsService, private router:NavController) {
    this.add = formbuilder.group({
      title: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      description: ["", [Validators.required, Validators.minLength(100)]],
      cover:["",[Validators.required]]
    })
  }


  ngOnInit() {
  }
  getAllPosts(){
    this.postService.getPosts().subscribe(response =>{
      //console.log(response);
      this.posts = response;
    })
  }
  onadd(){
    const data = this.add.value;
    this.postService.save(data).subscribe(
      newPost$ =>{
        this.posts.push(newPost$);

        this.router.navigateForward('/posts')
        this.nav.pop();
        this.getAllPosts();
      }
    );
    
  }
  

}
