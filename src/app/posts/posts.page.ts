import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  postsData:any;

  constructor(public postService: PostsService,private router:NavController,private nav:NavController) { 
    this.postsData =[];
  }
  posts=[
    {
    "title": "Will Smith",
    "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    },
    {
    "title": "Jackline Joy",
    "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    },
    {
    "title": "Alu Arjun",
    "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    },
    {
    "title": "Kavitha Kumar",
   "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    },
    {
    "title": "John Snow",
    "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    },
    {
    "title": "Priya Dutt",
   "description": "email@email.com",
    "cover": "assets/images/img1.jpg"
    }
  ]

  ngOnInit() {
    this.getAllPosts();

  }
  getAllPosts(){
    this.postService.getPosts().subscribe(response =>{
      //console.log(response);
      this.postsData = response;
    })
  }
  addPost(){
    this.router.navigateForward('/add-post')
  }
  editPost(id: number){
    this.router.navigateForward(['/edit-post/'+id])
  }
  delete(post){
    this.postService.deletePost(post.id).subscribe(response =>{
      //console.log(response);
      this.getAllPosts();
      this.nav.pop();
    })
  }

}
