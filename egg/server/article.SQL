create database egg_article;

use egg_article;

create table article(
    id int(10) not null auto_increment,
    img text default null comment '缩略图',
    title varchar(80) default null comment '文章标题',
    summary varchar(300) default null comment '文章简介',
    content text default null comment '文章内容',
    -- createTime timestamp default null comment '发布时间',   在controller的article.js自动生成createTime
    primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(img, title, summary, content) values('https://inews.gtimg.com/newsapp_bt/0/11292950545/641', '约基奇30+21+10掘金送爵士五连败 穆雷31分', '腾讯体育2月6日讯 掘金98-95击败爵士，完成15分大逆转，送给爵士五连败。掘金伤兵满营，加上马里克-比斯利等人被交易，今天一共只有7人作战，2名替补球员还不是常规轮换球员。', '本场之星：尼科拉-约基奇\n掘金完完全全是一个残阵，面对兵强马壮且主场作战的爵士，总体天赋差距很大。从纸面上看，掘金对爵士没有多少胜算，但约老师和穆雷两名球员却完成了对爵士的天赋碾压。\n约老师今天面对同样是全明星中锋的戈贝尔，完完全全统治比赛。他展现出了稳定的中距离投篮能力、强势的内线进攻和卓越的组织策应能力，左右和主宰了今天的比赛。');
