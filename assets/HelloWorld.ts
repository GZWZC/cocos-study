/*
 * @Author: wangzhichao
 * @Date: 2022-11-23 20:55:02
 * @LastEditors: your Name
 * @LastEditTime: 2022-11-23 20:55:35
 * @Description: 
 */
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HelloWorld')
export class HelloWorld extends Component {
    start() {
        console.info('Hello world');
    }

    update(deltaTime: number) {
    }
}

